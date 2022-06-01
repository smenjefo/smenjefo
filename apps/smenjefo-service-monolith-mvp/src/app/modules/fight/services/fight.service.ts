
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as uuid from 'uuid';

import EntityMapper from '../../../mappers/EntityMapper';
import FightConfigurationFactory from '../domain/FightConfiguration/FightConfigurationFactory';
import RoundDomainService from '../domain/RoundDomainService';

import FightCreateDto from '../dto/fight-create.dto';
import FightDto from '../dto/fight.dto';
import FightPlayer from '../entities/fight-player.entity';
import FightTeam from '../entities/fight-team.entity';
import Fight from '../entities/fight.entity';
import Round from '../entities/round.entity';

@Injectable()
export class FightService {
  constructor(
    @InjectRepository(Fight)
    private fightRepository: Repository<Fight>,

    private roundDomainService: RoundDomainService,
  ) {}

  private readonly possibleRoles = ['maniac', 'comrade', 'rogue'];

  private getRandomPlayerRole = () => {
    return this.possibleRoles[Math.floor(Math.random() * 3)];
  };

  async create(fightCreateDto: FightCreateDto): Promise<FightDto> {
    const fight = new EntityMapper<Fight, FightCreateDto>().fromDtoToEntity(
      Fight,
      fightCreateDto,
    );

    const fightConfigurationFactory = new FightConfigurationFactory();
    const fightConfiguration = fightConfigurationFactory.create(
      fightCreateDto.fightConfigurationType,
    );

    const currentRoundId = uuid.v4();

    const fightTeamsMap = new Map<string, FightTeam>();

    const round = new Round();

    round.nextRoundId = uuid.v4();
    round.createdAt = this.roundDomainService.getCurrentTime(fightConfiguration);
    round.endsAt = this.roundDomainService.getEndsAtTime(fightConfiguration);
    round.history = [];
    round.uuid = currentRoundId;
    round.turns = [];
    round.number = 1;
    round.players = fightCreateDto.players.map((player) => {
      const fightPlayer = new FightPlayer();

      fightPlayer.entityId = player.entityId;
      fightPlayer.nickname = player.nickname;
      // TODO:
      // role pick phase before fight (feature)
      fightPlayer.role = this.getRandomPlayerRole();
      fightPlayer.avatarURL = player.avatarURL;
      fightPlayer.team = player.team;
      fightPlayer.hp = fightConfiguration.initialPlayerHealthPoints;
      fightPlayer.energy = fightConfiguration.initialPlayerEnergy;
      fightPlayer.status = 'inGame';
      fightPlayer.turnStatus = 'inProgress';

      const fightTeam = new FightTeam();

      fightTeam.teamId = player.team;

      fightTeamsMap.set(fightTeam.teamId, fightTeam);

      return fightPlayer;
    });

    fight.fightApplicationId = fightCreateDto.fightApplicationId;
    fight.currentRoundId = currentRoundId;
    fight.teams = [...fightTeamsMap.values()];
    fight.rounds = [round];
    fight.status = 'inProgress';

    const newFight = await this.fightRepository.save(fight);

    const newFightDto = new EntityMapper<Fight, FightDto>().fromEntityToDto(
      newFight,
    );
    
    return newFightDto;
  }

  async getOne(fightUUID: string): Promise<Fight> {
    return await this.fightRepository.createQueryBuilder('fight')
      .where(`fight.uuid = :uuid`, { uuid: fightUUID })
      .leftJoinAndSelect("fight.teams", "teams")
      .leftJoinAndSelect("fight.rounds", "rounds")
      .leftJoinAndSelect("rounds.players", "players")
      .leftJoinAndSelect("rounds.turns", "turns")
      .leftJoinAndSelect('rounds.history', 'history')
      .leftJoinAndSelect("history.historyRecordPlayers", "historyRecordPlayers")
      .orderBy('teams.id', 'ASC')
      .addOrderBy('players.id', 'ASC')
      .getOne();
  }

  async getOneByUUID(fightUUID: string): Promise<FightDto> {
    const fight = await this.getOne(fightUUID);

    if (!fight) {
      throw new NotFoundException();
    }

    const fightDto = new EntityMapper<Fight, FightDto>().fromEntityToDto(fight);

    return fightDto;
  }
}
