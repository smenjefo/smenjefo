import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';

import PrimaryKeyMappingInterceptor from '../../../interceptors/PrimaryKeyMappingInterceptor';

import FightCreateDto from '../dto/fight-create.dto';
import { FightUUIDParam } from '../dto/fight-uuid.param';
import { FightService } from '../services/fight.service';

@Controller('fight/fights')
@UseInterceptors(PrimaryKeyMappingInterceptor)
export class FightsController {
  constructor(
    private readonly fightService: FightService,
  ) {}

  @Post()
  create(@Body() fightCreateDto: FightCreateDto) {
    return this.fightService.create(fightCreateDto);
  }

  @Get(':fightUUID')
  getOneByUUID(@Param() fightUUID: FightUUIDParam) {
    return this.fightService.getOneByUUID(fightUUID.fightUUID);
  }
}
