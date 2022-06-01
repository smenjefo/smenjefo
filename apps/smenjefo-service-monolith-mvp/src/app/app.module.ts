import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProfileModule } from './modules/profile/profile.module';
import { FightRegistrationModule } from './modules/fight-registration/fight-registration.module';
import { FightModule } from './modules/fight/fight.module';

import Fight from './modules/fight/entities/fight.entity';
import FightTeam from './modules/fight/entities/fight-team.entity';
import Round from './modules/fight/entities/round.entity';
import Turn from './modules/fight/entities/turn.entity';
import FightPlayer from './modules/fight/entities/fight-player.entity';
import History from './modules/fight/entities/history.entity';
import HistoryRecordPlayer from './modules/fight/entities/history-record-player.entity';

import Application from './modules/fight-registration/entities/application.entity';
import Team from './modules/fight-registration/entities/team.entity';
import Player from './modules/fight-registration/entities/player.entity';
import FightFilter from './modules/fight-registration/entities/fight-filter.entity';
import FightTrigger from './modules/fight-registration/entities/fight-trigger.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": process.env.MONOLITH_MVP_MYSQL_HOST,
      "port": process.env.MONOLITH_MVP_MYSQL_PORT as any,
      "username": process.env.MONOLITH_MVP_MYSQL_DB_USER,
      "password": process.env.MONOLITH_MVP_MYSQL_DB_PASS,
      "database": process.env.MONOLITH_MVP_MYSQL_DB_NAME,
      "synchronize": true,
      "logging": false,
      "entities": [
        Fight,
        FightTeam,
        Round,
        Turn,
        FightPlayer,
        History,
        HistoryRecordPlayer,
        Application,
        Team,
        Player,
        FightFilter,
        FightTrigger,
      ],
    }),
    ProfileModule,
    FightRegistrationModule,
    FightModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
