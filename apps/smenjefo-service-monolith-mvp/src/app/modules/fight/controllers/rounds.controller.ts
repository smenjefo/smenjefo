import { Controller, Get, Param, Put, UseInterceptors } from '@nestjs/common';
import PrimaryKeyMappingInterceptor from '../../../interceptors/PrimaryKeyMappingInterceptor';

import { FightUUIDParam } from '../dto/fight-uuid.param';
import { RoundUUIDParam } from '../dto/round-uuid.param';
import { RoundService } from '../services/round.service';

@Controller('fight/fights/:fightUUID/rounds')
@UseInterceptors(PrimaryKeyMappingInterceptor)
export class RoundsController {
  constructor(
    private readonly roundService: RoundService,
  ) {}

  @Get(':roundUUID')
  getOneByUUID(
    @Param() fightUUID: FightUUIDParam,
    @Param() roundUUID: RoundUUIDParam,
  ) {
    return this.roundService.getOneByUUID(fightUUID.fightUUID, roundUUID.roundUUID);
  }

  @Put(':roundUUID')
  create(
    @Param() fightUUID: FightUUIDParam,
    @Param() roundUUID: RoundUUIDParam,
    // is empty ?
    // @Body() roundCreateDto: RoundCreateDto,
  ) {
    return this.roundService.createRoundByUUID(fightUUID.fightUUID, roundUUID.roundUUID);
  }
}
