
import { HttpException, HttpStatus, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import CreateFightApplicationDto from '../dto/create-fight-application.dto';
import FightApplicationDto from '../dto/fight-application.dto';

import Application from '../entities/application.entity';
import FightFilter from '../entities/fight-filter.entity';
import FightTrigger from '../entities/fight-trigger.entity';
import Player from '../entities/player.entity';
import Team from '../entities/team.entity';
import EntityMapper from '../../../mappers/EntityMapper';
import { ProfileFakeService } from '../../profile/services/profile-fake.service';
import TeamDomainService from '../domain/TeamDomainService';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectConnection()
    private connection: Connection,

    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,

    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,

    @InjectRepository(Player)
    private playersRepository: Repository<Player>,

    @InjectRepository(FightFilter)
    private fightFiltersRepository: Repository<FightFilter>,

    @InjectRepository(FightTrigger)
    private fightTirggersRepository: Repository<FightTrigger>,

    @Inject(ProfileFakeService)
    private profileService: ProfileFakeService,

    private teamDomainService: TeamDomainService,
  ) {}

  prepareApplicationQueryBuilder = (conditions?: Record<string, any>) => {
    const queryBuiler = this.applicationsRepository.createQueryBuilder('application');

    for (const key in conditions) {
      if (conditions[key]) {
        queryBuiler.where(`application.${key} = :${key}`, { [key]: conditions[key] });
      }
    }

    return queryBuiler
      .leftJoinAndSelect('application.fightFilters', 'fightFilters')
      .leftJoinAndSelect('application.fightTriggers', 'fightTriggers')
      .leftJoinAndSelect('application.teams', 'teams')
      .leftJoinAndSelect("teams.players", "players")
      .orderBy('teams.id', 'ASC')
      .addOrderBy('players.id', 'ASC');
  };

  async removeApplicationNested(application: Application): Promise<Application> {
    let removedApplication: Application;

    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      application.teams.forEach(async (team) => {
        await this.playersRepository.remove(team.players);
      });
  
      await this.teamsRepository.remove(application.teams);
      await this.fightFiltersRepository.remove(application.fightFilters);
      await this.fightTirggersRepository.remove(application.fightTriggers);
  
      removedApplication = await this.applicationsRepository.remove(application);

      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();

      throw new InternalServerErrorException();
    }

    await queryRunner.release();

    return removedApplication;
  }

  async getAllTree(type?: string): Promise<Application[]> {
    const queryBuilder = this.prepareApplicationQueryBuilder({ type });

    return queryBuilder.getMany();
  }

  async getOneByUUID(applicationUUID: string): Promise<Application> {
    const queryBuilder = this.prepareApplicationQueryBuilder({ uuid: applicationUUID });

    return queryBuilder.getOne();
  }

  async deleteByUUID(applicationUUID: string): Promise<Application> {
    const application = await this.getOneByUUID(applicationUUID);

    // TODO: 204 here
    if (!application) {
      throw new HttpException('No Content', HttpStatus.NO_CONTENT);
    }

    // profiles update
    const playerEntityIds = [];

    application.teams.forEach((team) => {
      team.players.forEach((player) => {
        playerEntityIds.push(player.entityId);
      });
    });

    const removedApplication = await this.removeApplicationNested(application);

    await this.profileService.updateAll({
      profiles: playerEntityIds,
      data: {
        status: 'free',
        fightApplicationId: application.uuid,
        fightId: null,
      },
    });

    return removedApplication;
  }

  async create(createFightApplicationDto: CreateFightApplicationDto): Promise<FightApplicationDto> {
    const application = new EntityMapper<Application, CreateFightApplicationDto>().fromDtoToEntity(
      Application,
      createFightApplicationDto,
    );

    const teams = this.teamDomainService.defineTeams(application.type).map((domainTeam) => {
      const team = new Team();

      team.players = [];
  
      if (domainTeam.getHasOwner()) {
        const ownerPlayer = new Player();
    
        ownerPlayer.entityId = application.ownerEntityId;
        ownerPlayer.nickname = application.ownerNickname;

        team.players.push(ownerPlayer);
      }

      return team;
    });

    application.ownerEntityId = createFightApplicationDto.ownerEntityId;
    application.ownerNickname = createFightApplicationDto.ownerNickname;
    application.teams = [...teams];
    application.status = 'inProgress';
    application.fightId = '';

    const newApplication = await this.applicationsRepository.save(application);

    // profile update
    await this.profileService.updateOne(application.ownerEntityId, {
      status: 'inFightApplication',
      fightApplicationId: application.uuid,
      fightId: null,
    });

    const fightApplicationDto = new EntityMapper<Application, FightApplicationDto>().fromEntityToDto(
      newApplication,
    );

    return fightApplicationDto;
  }
}
