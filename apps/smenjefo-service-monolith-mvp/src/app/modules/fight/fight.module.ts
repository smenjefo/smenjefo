import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FightController } from './controllers/fight.controller';
import { FightsController } from './controllers/fights.controller';
import { RoundsController } from './controllers/rounds.controller';
import { TurnsController } from './controllers/turns.controller';

import Fight from './entities/fight.entity';
import History from './entities/history.entity';
import FightPlayer from './entities/fight-player.entity';
import HistoryRecordPlayer from './entities/history-record-player.entity';
import Turn from './entities/turn.entity';
import Round from './entities/round.entity';

import { FightService } from './services/fight.service';
import { TurnService } from './services/turn.service';
import RoundDomainService from './domain/RoundDomainService';
import RoundCalculationDomainService from './domain/RoundCalculationDomainService';
import { RoundService } from './services/round.service';
import FightTeam from './entities/fight-team.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Fight,
      FightTeam,
      Round,
      Turn,
      FightPlayer,
      History,
      HistoryRecordPlayer,
    ]),
    FightModule,
  ],
  exports: [
    FightService,
  ],
  controllers: [
    FightController,
    FightsController,
    RoundsController,
    TurnsController,
  ],
  providers: [
    FightService,
    TurnService,
    RoundService,
    RoundDomainService,
    RoundCalculationDomainService,
  ],
})
export class FightModule {}
