
import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import PlayerDto from '../dto/player.dto';

import Application from '../entities/application.entity';
import Player from '../entities/player.entity';
import { ApplicationsService } from './applications.service';
import PlayerCreatedDto from '../dto/player-created.dto';
import EntityMapper from '../../../mappers/EntityMapper';
import { FightsService } from './fights.service';
import { ProfileFakeService } from '../../profile/services/profile-fake.service';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,

    @InjectRepository(Player)
    private playersRepository: Repository<Player>,

    @Inject(FightsService)
    private fightsService: FightsService,

    @Inject(ProfileFakeService)
    private profileService: ProfileFakeService,

    private applicationService: ApplicationsService,
  ) {}

  async createPlayer(applicationUUID: string, teamUUID: string, playerDto: PlayerDto): Promise<PlayerCreatedDto> {
    const application = await this.applicationService.getOneByUUID(applicationUUID);

    if (!application) {
      throw new NotFoundException();
    }

    if (application.status === 'complete') {
      throw new ForbiddenException();
    }

    const teamByUUID = application.teams.find((team) => {
      return team.uuid === teamUUID;
    });

    if (!teamByUUID) {
      throw new NotFoundException(); 
    }

    const newPlayer = new Player();

    newPlayer.entityId = playerDto.entityId;
    newPlayer.nickname = playerDto.nickname;

    teamByUUID.players.push(newPlayer);

    const isCompleteApplication = application.teams.every((team) => {
      return team.players.length >= application.teamCapacity;
    });

    if (isCompleteApplication) {
      application.status = 'complete';

      await this.fightsService.createFightForCompleteApplication(application);
    } else {
      await this.applicationsRepository.save(application);

      // profile update
      await this.profileService.updateOne(newPlayer.entityId, {
        status: 'inFightApplication',
        fightApplicationId: application.uuid,
        fightId: null,
      });
    }

    // TODO: validation
    // TODO: team capacity validation

    const playerCreatedDto = new EntityMapper<Player, PlayerCreatedDto>().fromEntityToDto(
      newPlayer,
    );

    playerCreatedDto.fightApplicationId = applicationUUID;
    playerCreatedDto.teamId = teamUUID;

    return playerCreatedDto;
  }

  async deleteByUUID(applicationUUID: string, playerUUID: string) {
    const application = await this.applicationService.getOneByUUID(applicationUUID);

    if (!application) {
      throw new NotFoundException();
    }

    if (application.status === 'complete') {
      throw new ForbiddenException();
    }

    const player = await this.playersRepository.findOne({ uuid: playerUUID });

    const removedPlayer = await this.playersRepository.remove(player);

    // profile update
    await this.profileService.updateOne(removedPlayer.entityId, {
      status: 'free',
      fightApplicationId: application.uuid,
      fightId: null,
    });

    return removedPlayer;
  }
}
