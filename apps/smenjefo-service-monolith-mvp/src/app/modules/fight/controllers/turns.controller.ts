import { Body, Controller, Param, Post, UseInterceptors } from '@nestjs/common';
import PrimaryKeyMappingInterceptor from '../../../interceptors/PrimaryKeyMappingInterceptor';

import { FightUUIDParam } from '../dto/fight-uuid.param';
import { RoundUUIDParam } from '../dto/round-uuid.param';
import TurnCreateDto from '../dto/turn-create.dto';
import { TurnService } from '../services/turn.service';

@Controller('fight/fights/:fightUUID/rounds/:roundUUID/turns')
@UseInterceptors(PrimaryKeyMappingInterceptor)
export class TurnsController {
  constructor(
    private readonly turnService: TurnService,
  ) {}

  @Post()
  create(
    @Param() fightUUID: FightUUIDParam,
    @Param() roundUUID: RoundUUIDParam,
    @Body() turnCreateDto: TurnCreateDto,
  ) {
    return this.turnService.makeTurn(fightUUID.fightUUID, roundUUID.roundUUID, turnCreateDto);
  }
}
