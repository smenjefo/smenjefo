
import { ForbiddenException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import EntityMapper from '../../../mappers/EntityMapper';
import { Repository } from 'typeorm';
import RoundDomainService from '../domain/RoundDomainService';

import TurnCreateDto from '../dto/turn-create.dto';
import TurnDto from '../dto/turn.dto';
import Fight from '../entities/fight.entity';
import Turn from '../entities/turn.entity';
import { FightService } from './fight.service';
import { RoundService } from './round.service';

@Injectable()
export class TurnService {
  constructor(
    @InjectRepository(Fight)
    private fightRepository: Repository<Fight>,

    private fightService: FightService,

    private roundService: RoundService,

    private roundDomainService: RoundDomainService,
  ) {}

  async makeTurn(fightUUID: string, roundUUID: string, turnCreateDto: TurnCreateDto): Promise<TurnDto> {
    const fight = await this.fightService.getOne(fightUUID);

    if (!fight) {
      throw new NotFoundException();
    }

    const round = fight.rounds.find((round) => {
      return round.uuid === roundUUID;
    });

    if (!round) {
      throw new NotFoundException();
    }

    const initiatorPlayer = round.players.find((player) => {
      return player.uuid === turnCreateDto.initiatorId;
    });

    const targetPlayer = round.players.find((player) => {
      return player.uuid === turnCreateDto.targetId;
    });

    if (!initiatorPlayer || !targetPlayer) {
      throw new ForbiddenException();
    }

    if (initiatorPlayer.turnStatus === 'completed') {
      throw new ForbiddenException();
    }

    if (fight.currentRoundId !== roundUUID) {
      throw new ForbiddenException();
    }

    if (this.roundDomainService.isRoundEnded(fight, round)) {
      throw new ForbiddenException();
    }

    const turn = new EntityMapper<Turn, TurnCreateDto>().fromDtoToEntity(
      Turn,
      turnCreateDto,
    );

    round.turns.push(turn);

    initiatorPlayer.turnStatus = 'completed';

    try {
      await this.fightRepository.save(fight);
    } catch (err) {
      throw new InternalServerErrorException();
    }

    // create new round
    if (this.roundDomainService.isRoundEnded(fight, round)) {
      await this.roundService.createRoundByUUID(fightUUID, round.nextRoundId, fight);
    }

    const turnDto = new EntityMapper<Turn, TurnDto>().fromEntityToDto(
      turn,
    );

    return turnDto;
  }
}
