import { Controller, Post, Param, Delete, Body, UseInterceptors } from '@nestjs/common';

import PrimaryKeyMappingInterceptor from '../../../interceptors/PrimaryKeyMappingInterceptor';

import PlayerDto from '../dto/player.dto';
import { ApplicationUUIDParam } from '../dto/application-uuid.param';
import { TeamUUIDParam } from '../dto/team-uuid.param';
import { PlayerUUIDParam } from '../dto/player-uuid.param';

import { PlayersService } from '../services/players.service';

@Controller('fight-registration/applications/:applicationUUID/teams/:teamUUID/players')
@UseInterceptors(PrimaryKeyMappingInterceptor)
export class FightRegistrationPlayersController {
  constructor(
    private readonly playersService: PlayersService,
  ) {}

  @Post()
  create(
    @Param() applicationUUID: ApplicationUUIDParam,
    @Param() teamUUID: TeamUUIDParam,
    @Body() playerDto: PlayerDto,
  ) {
    return this.playersService.createPlayer(applicationUUID.applicationUUID, teamUUID.teamUUID, playerDto);
  }

  @Delete(':playerUUID')
  remove(
    @Param() applicationUUID: ApplicationUUIDParam,
    @Param() teamUUID: TeamUUIDParam,
    @Param() playerUUID: PlayerUUIDParam,
  ) {
    return this.playersService.deleteByUUID(applicationUUID.applicationUUID, playerUUID.playerUUID);
  }
}
