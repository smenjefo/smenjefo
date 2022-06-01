import CalculationPlayer from "../../CalculationPlayer/CalculationPlayer";
import Turn from "../../Turn/Turn";
import ITurnDirection from "../../TurnDirection/ITurnDirection";
import MutualTurnDirection from "../../TurnDirection/MutualTurnDirection";
import SelfTurnDirection from "../../TurnDirection/SelfTurnDirection";
import TurnTypeFactory from "../../TurnType/TurnTypeFactory";
import TurnHistory from "../TurnHistory";

describe('TurnHistory', () => {
  const getTurnMock = (turnDirection: ITurnDirection, initiatorTurnType = 'rock') => {
    const turnTypeFactory = new TurnTypeFactory();

    const turn = new Turn(
      new CalculationPlayer(3, 3, 'initiatorEntityId', 'initiatorPlayer', 'teamOne'),
      new CalculationPlayer(3, 3, 'targetEntityId', 'targetPlayer', 'teamTwo'),
      turnTypeFactory.create(initiatorTurnType),
      turnTypeFactory.create('rock'),
      turnDirection,
    );

    return turn;
  };

  describe('recordLine', () => {
    it('should return correct record', () => {
      const turnDirection = new MutualTurnDirection();
      const turn = getTurnMock(turnDirection);
      const turnHistoryPlayerRecord = new TurnHistory();

      turn.getInitiator().decreaseHealthBy(2);
      turn.getInitiator().increaseEnergyBy(2);

      const result = turnHistoryPlayerRecord.recordLine([turn]);
  
      expect(result).toMatchObject([{
        turnDirection: 'mutual',
        initiator: {
          nickname: 'initiatorPlayer',
          turnType: 'rock',
          changedHP: '-2',
          changedEnergy: '+2',
        },
        target: {
          nickname: 'targetPlayer',
          turnType: 'rock',
          changedHP: '',
          changedEnergy: '',
        },
      }]);
    });

    it('should return only last changes of changedHp and changedEnergy', () => {
      const turnDirection = new MutualTurnDirection();
      const turn = getTurnMock(turnDirection);
      const turnHistoryPlayerRecord = new TurnHistory();

      turn.getInitiator().decreaseHealthBy(1);
      turn.getInitiator().increaseEnergyBy(1);

      turnHistoryPlayerRecord.recordLine([turn]);

      turn.getInitiator().decreaseHealthBy(2);
      turn.getInitiator().increaseEnergyBy(2);

      const result = turnHistoryPlayerRecord.recordLine([turn]);
  
      expect(result).toMatchObject([{
        turnDirection: 'mutual',
        initiator: {
          nickname: 'initiatorPlayer',
          turnType: 'rock',
          changedHP: '-2',
          changedEnergy: '+2',
        },
        target: {
          nickname: 'targetPlayer',
          turnType: 'rock',
          changedHP: '',
          changedEnergy: '',
        },
      }]);
    });

    it('should not return changes of changedHp or changedEnergy when direction is self and turn has energy', () => {
      const turnDirection = new SelfTurnDirection();
      const turn = getTurnMock(turnDirection);
      const turnHistoryPlayerRecord = new TurnHistory();

      turn.getInitiator().decreaseHealthBy(2);
      turn.getInitiator().increaseEnergyBy(2);

      const result = turnHistoryPlayerRecord.recordLine([turn]);
  
      expect(result).toMatchObject([{
        turnDirection: 'self',
        initiator: {
          nickname: 'initiatorPlayer',
          turnType: 'rock',
          changedHP: '',
          changedEnergy: '',
        },
        target: {
          nickname: 'targetPlayer',
          turnType: 'rock',
          changedHP: '',
          changedEnergy: '',
        },
      }]);
    });

    it('should not changes of changedHp or changedEnergy when direction is self and turn without energy', () => {
      const turnDirection = new SelfTurnDirection();
      const turn = getTurnMock(turnDirection, 'skip');
      const turnHistoryPlayerRecord = new TurnHistory();

      turn.getInitiator().decreaseHealthBy(2);
      turn.getInitiator().increaseEnergyBy(2);

      const result = turnHistoryPlayerRecord.recordLine([turn]);
  
      expect(result).toMatchObject([{
        turnDirection: 'self',
        initiator: {
          nickname: 'initiatorPlayer',
          turnType: 'skip',
          changedHP: '-2',
          changedEnergy: '+2',
        },
        target: {
          nickname: 'targetPlayer',
          turnType: 'rock',
          changedHP: '',
          changedEnergy: '',
        },
      }]);
    });
  });
});