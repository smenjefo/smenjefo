import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FightRegistrationController } from './controllers/fight-registration.controller';
import { FightRegistrationApplicationsController } from './controllers/fight-registration-applications.controller';
import { FightRegistrationTeamsController } from './controllers/fight-registration-teams.controller';
import { FightRegistrationPlayersController } from './controllers/fight-registration-players.controller';

import Application from './entities/application.entity';
import Team from './entities/team.entity';
import Player from './entities/player.entity';
import FightFilter from './entities/fight-filter.entity';
import FightTrigger from './entities/fight-trigger.entity';

import { ApplicationsService } from './services/applications.service';
import { PlayersService } from './services/players.service';
import { FightModule } from '../fight/fight.module';

import { FightsService } from './services/fights.service';
import { ProfileModule } from '../profile/profile.module';
import TeamDomainService from './domain/TeamDomainService';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Application,
      Team,
      Player,
      FightFilter,
      FightTrigger,
    ]),
    FightModule,
    ProfileModule,
  ],
  controllers: [
    FightRegistrationController,
    FightRegistrationApplicationsController,
    FightRegistrationTeamsController,
    FightRegistrationPlayersController,
  ],
  providers: [
    ApplicationsService,
    PlayersService,
    FightsService,
    TeamDomainService,
  ]
})
export class FightRegistrationModule {}
