
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Application from '../entities/application.entity';

import { FightService } from '../../fight/services/fight.service';
import { ProfileFakeService } from '../../profile/services/profile-fake.service';

@Injectable()
export class FightsService {
  constructor(
    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,

    @Inject(FightService)
    private fightService: FightService,

    @Inject(ProfileFakeService)
    private profileService: ProfileFakeService,
  ) {}

  async createFightForCompleteApplication(application: Application) {
    // prepare data
    const players = [];
    const playerEntityIds = [];

    application.teams.forEach((team) => {
      team.players.forEach((player) => {
        players.push({
          entityId: player.entityId,
          nickname: player.nickname,
          team: team.uuid,
        });

        playerEntityIds.push(player.entityId);
      });
    });

    // player avatars fetching
    const profiles = await this.profileService.getMany(playerEntityIds);

    const playersWithAvatars = players.map((player) => {
      const profile = profiles.find((profile) => {
        return profile.entityId === player.entityId;
      });

      return {
        ...player,
        avatarURL: profile.avatarURL,
      };
    });

    // fight creation
    const fight = await this.fightService.create({
      fightApplicationId: application.uuid,
      fightConfigurationType: 'default',
      players: playersWithAvatars,
      type: application.type,
    });

    // update application
    application.fightId = fight.uuid;

    await this.applicationsRepository.save(application);

    // update player statuses
    await this.profileService.updateAll({
      profiles: playerEntityIds,
      data: {
        status: 'inFight',
        fightApplicationId: application.uuid,
        fightId: fight.uuid,
      },
    });
  }
}
