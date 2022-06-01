import CalculationPlayer from '../../CalculationPlayer/CalculationPlayer';
import RoundCalculation from '../RoundCalculation';

describe('RoundCalculation', () => {
  it('should define than fight is in progress', () => {
    const roundCalculation = new RoundCalculation();
    const players = [
      new CalculationPlayer(3, 3, 'playerOne', 'playerOneEntityId', 'teamOne'),
      new CalculationPlayer(3, 3, 'playerTwo', 'playerTwoEntityId', 'teamTwo'),
    ];

    roundCalculation.calculate(players);

    expect(!roundCalculation.isCompleted()).toBeTruthy();
  });

  it('should define than fight is ended', () => {
    const roundCalculation = new RoundCalculation();
    const players = [
      new CalculationPlayer(3, 3, 'playerOne', 'playerOneEntityId', 'teamOne'),
      new CalculationPlayer(0, 3, 'playerTwo', 'playerTwoEntityId', 'teamTwo'),
    ];

    roundCalculation.calculate(players);

    expect(roundCalculation.isCompleted()).toBeTruthy();
  });

  it('should calculate correctly more complex case (teamOnTeam mode)', () => {
    const roundCalculation = new RoundCalculation();
    const players = [
      new CalculationPlayer(3, 3, 'player', 'playerEntityId', 'teamOne'),
      new CalculationPlayer(3, 3, 'player', 'playerEntityId', 'teamOne'),
      new CalculationPlayer(3, 3, 'player', 'playerEntityId', 'teamOne'),
      new CalculationPlayer(3, 3, 'player', 'playerEntityId', 'teamOne'),
      new CalculationPlayer(3, 3, 'player', 'playerEntityId', 'teamOne'),

      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamTwo'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamTwo'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamTwo'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamTwo'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamTwo'),
    ];

    roundCalculation.calculate(players);

    expect(roundCalculation.isCompleted()).toBeTruthy();
  });

  it('should calculate correctly more complex case (allVersusAll mode)', () => {
    const roundCalculation = new RoundCalculation();
    const players = [
      new CalculationPlayer(3, 3, 'player', 'playerEntityId', 'teamOne'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamTwo'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamThree'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamFour'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamFive'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamSix'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamSeven'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamEight'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamNine'),
      new CalculationPlayer(0, 3, 'player', 'playerEntityId', 'teamTen'),
    ];

    roundCalculation.calculate(players);

    expect(roundCalculation.isCompleted()).toBeTruthy();
  });
});