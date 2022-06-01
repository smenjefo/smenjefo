import { Injectable } from "@nestjs/common";

import Fight from "../entities/fight.entity";
import History from "../entities/history.entity";
import CalculationPlayer from "./CalculationPlayer/CalculationPlayer";
import Turn from "./Turn/Turn";
import TurnCalculation from "./TurnCalculation/TurnCalculation";
import TurnHistory from "./TurnHistory/TurnHistory";
import TurnGlue from "./TurnGlue/TurnGlue";
import TurnTypeFactory from "./TurnType/TurnTypeFactory";
import HistoryRecordPlayer from "../entities/history-record-player.entity";
import Round from "../entities/round.entity";
import RoundCalculation from "./RoundCalculation/RoundCalculation";

@Injectable()
export default class RoundCalculationDomainService {
  public calculate = (fight: Fight, round: Round) => {
    const domainPlayers: Record<string, CalculationPlayer> = {};

    const turnGlue = new TurnGlue();

    const turnTypeFactory = new TurnTypeFactory();
    const turnHistory = new TurnHistory();

    round.players.forEach((player) => {
      domainPlayers[player.uuid] = new CalculationPlayer(
        player.hp,
        player.energy,
        player.entityId,
        player.nickname,
        player.team,
      );
    });

    // склейка однонаправленных ходов
    round.turns.forEach((turn) => {
      const domainTurn = new Turn(
        domainPlayers[turn.initiatorId],
        domainPlayers[turn.targetId],
        turnTypeFactory.create(turn.turnType),
        null,
        null,
      );

      turnGlue.addTurnForGlue(domainTurn);
    });

    const gluedDomainTurns = turnGlue.glue();

    // пересчитать health и energy игроков внутри склеенных ходов
    gluedDomainTurns.forEach((domainTurn) => {
      new TurnCalculation(domainTurn.getTurnDirection()).calculate(
        domainTurn.getInitiator(),
        domainTurn.getTarget(),
        domainTurn.getInitiatorTurnType(),
        domainTurn.getTargetTurnType(),
      );
    });

    // смаппить данные обратно, обновить статусы, записать в модель fight
    round.players = round.players.map((player) => {
      const domainPlayer = domainPlayers[player.uuid];

      if (domainPlayer.isEliminated()) {
        player.status = 'eliminated';
      }

      player.hp = domainPlayer.getHealth();
      player.energy = domainPlayer.getEnergy();
      player.status = domainPlayer.isEliminated()
        ? 'eliminated'
        : 'inGame';
      player.turnStatus = 'inProgress';

      return player;
    });

    // составить визуальную историю и добавить в модель fight
    const newDomainHistories = turnHistory.recordLine(gluedDomainTurns);

    round.history = newDomainHistories.map((newDomainHistory) => {
      const history = new History();

      const initiator = new HistoryRecordPlayer();
      const target = new HistoryRecordPlayer();
  
      history.turnDirection = newDomainHistory.turnDirection;

      initiator.role = 'initiator';
      initiator.nickname = newDomainHistory.initiator.nickname;
      initiator.turnType = newDomainHistory.initiator.turnType;
      initiator.changedHP = newDomainHistory.initiator.changedHP;
      initiator.changedEnergy = newDomainHistory.initiator.changedEnergy;
  
      target.role = 'target';
      target.nickname = newDomainHistory.target.nickname;
      target.turnType = newDomainHistory.target.turnType;
      target.changedHP = newDomainHistory.target.changedHP;
      target.changedEnergy = newDomainHistory.target.changedEnergy;

      history.historyRecordPlayers = [
        initiator,
        target,
      ];

      return history;
    });

    // подсчитать опыт и завершить поединок
    const roundCalculation = new RoundCalculation();

    roundCalculation.calculate(Object.values(domainPlayers));

    if (roundCalculation.isCompleted()) {
      fight.status = 'completed';
    }
  };
}