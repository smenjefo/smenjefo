
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as uuid from 'uuid';

import EntityMapper from '../../../mappers/EntityMapper';
import FightConfigurationFactory from '../domain/FightConfiguration/FightConfigurationFactory';
import RoundCalculationDomainService from '../domain/RoundCalculationDomainService';
import RoundDomainService from '../domain/RoundDomainService';

import RoundDto from '../dto/round.dto';
import Fight from '../entities/fight.entity';
import Round from '../entities/round.entity';
import Turn from '../entities/turn.entity';
import { FightService } from './fight.service';

@Injectable()
export class RoundService {
  constructor(
    @InjectRepository(Fight)
    private fightRepository: Repository<Fight>,

    private fightService: FightService,

    private roundCalculationDomainService: RoundCalculationDomainService,

    private roundDomainService: RoundDomainService,
  ) {}

  async getOneByUUID(fightUUID: string, roundUUID: string): Promise<RoundDto> {
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

    const mapper = new EntityMapper<Round, RoundDto>();
    const roundDto = mapper.fromEntityToDto(round);

    roundDto.fightStatus = fight.status;

    return roundDto;
  }

  async createRoundByUUID(fightUUID: string, roundUUID: string, existingFight?: Fight): Promise<RoundDto> {
    const fight = existingFight || await this.fightService.getOne(fightUUID);

    if (!fight) {
      throw new NotFoundException();
    }

    const round = fight.rounds.find((round) => {
      return round.uuid === roundUUID;
    });

    const mapper = new EntityMapper<Round, RoundDto>();

    // already created
    if (round) {
      const roundDto = mapper.fromEntityToDto(round);

      return roundDto;
    }

    const fightConfigurationFactory = new FightConfigurationFactory();
    const fightConfiguration = fightConfigurationFactory.create(fight.fightConfigurationType);

    const currentRound = fight.rounds.find((round) => {
      return round.uuid === fight.currentRoundId;
    });

    // проставить skip ходы
    currentRound.players.forEach((player) => {
      if (player.turnStatus === 'inProgress') {
        const skipTurn = new Turn();

        skipTurn.initiatorId = player.uuid;
        skipTurn.targetId = player.uuid;
        skipTurn.turnType = 'skip';

        currentRound.turns.push(skipTurn);
      }
    });

    this.roundCalculationDomainService.calculate(fight, currentRound);

    const newRound = new Round();

    newRound.uuid = roundUUID;
    newRound.number = fight.rounds.length + 1;
    newRound.turns = [];
    newRound.players = currentRound.players;
    newRound.history = currentRound.history;
    newRound.nextRoundId = uuid.v4();
    newRound.createdAt = this.roundDomainService.getCurrentTime(fightConfiguration);
    newRound.endsAt = this.roundDomainService.getEndsAtTime(fightConfiguration);

    fight.rounds.push(newRound);
    fight.currentRoundId = roundUUID;

    try {
      await this.fightRepository.save(fight);
    } catch (err) {
      throw new InternalServerErrorException();
    }

    const roundDto = mapper.fromEntityToDto(newRound);

    roundDto.fightStatus = fight.status;

    return roundDto;
  }
}
