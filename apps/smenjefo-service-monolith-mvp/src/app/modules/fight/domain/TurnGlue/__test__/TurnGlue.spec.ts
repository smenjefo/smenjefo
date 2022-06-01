import getJestAnonymousFnFix from '../../../../../utils/jestAnonymousFnFix.test';

import Turn from '../../Turn/Turn';
import CalculationPlayer from '../../CalculationPlayer/CalculationPlayer';
import TurnGlue from '../TurnGlue';
import RockTurnType from '../../TurnType/RockTurnType';
import ScissorsTurnType from '../../TurnType/ScissorsTurnType';
import MutualTurnDirection from '../../TurnDirection/MutualTurnDirection';
import UnidirectionalTurnDirection from '../../TurnDirection/UnidirectionalTurnDirection';
import HandOfHelpTurnType from '../../TurnType/HandOfHelpTurnType';
import SelfTurnDirection from '../../TurnDirection/SelfTurnDirection';
import SkipTurnType from '../../TurnType/SkipTurnType';

describe('TurnGlue', () => {
  const jestAnonymousFnFix = getJestAnonymousFnFix([
    CalculationPlayer,
    Turn,
    RockTurnType,
    ScissorsTurnType,
    HandOfHelpTurnType,
    MutualTurnDirection,
    SkipTurnType,
    UnidirectionalTurnDirection,
    SelfTurnDirection,
  ]);

  it('should glue two unidirectional turns into one mutual turn', () => {
    const turnGlue = new TurnGlue();

    const playerA = new CalculationPlayer(3, 3, 'playerA', 'playerA', 'playerA');
    const playerB = new CalculationPlayer(3, 3, 'playerB', 'playerB', 'playerB');
    
    turnGlue.addTurnForGlue(new Turn(playerA, playerB, new RockTurnType(), null, null));
    turnGlue.addTurnForGlue(new Turn(playerB, playerA, new ScissorsTurnType(), null, null));

    expect(turnGlue.glue().map(jestAnonymousFnFix)).toMatchObject([
      new Turn(playerA, playerB, new RockTurnType(), new ScissorsTurnType(), new MutualTurnDirection()),
    ]);
  });

  it('should glue unidirectional turns to mutual turns among other turns', () => {
    const turnGlue = new TurnGlue();

    const playerA = new CalculationPlayer(3, 3, 'playerA', 'playerA', 'playerA');
    const playerB = new CalculationPlayer(3, 3, 'playerB', 'playerB', 'playerB');
    const playerC = new CalculationPlayer(3, 3, 'playerC', 'playerC', 'playerC');
    const playerD = new CalculationPlayer(3, 3, 'playerD', 'playerD', 'playerD');
    
    turnGlue.addTurnForGlue(new Turn(playerA, playerD, new RockTurnType(), null, null));
    turnGlue.addTurnForGlue(new Turn(playerB, playerC, new RockTurnType(), null, null));
    turnGlue.addTurnForGlue(new Turn(playerC, playerD, new ScissorsTurnType(), null, null));
    turnGlue.addTurnForGlue(new Turn(playerD, playerA, new ScissorsTurnType(), null, null));

    expect(turnGlue.glue().map(jestAnonymousFnFix)).toMatchObject([
      new Turn(playerA, playerD, new RockTurnType(), new ScissorsTurnType(), new MutualTurnDirection()),
      new Turn(playerB, playerC, new RockTurnType(), new ScissorsTurnType(), new UnidirectionalTurnDirection()),
      new Turn(playerC, playerD, new ScissorsTurnType(), new ScissorsTurnType(), new UnidirectionalTurnDirection()),
    ]);
  });

  it('should glue self turns correctly', () => {
    const turnGlue = new TurnGlue();

    const playerA = new CalculationPlayer(3, 3, 'playerA', 'playerA', 'playerA');
    
    turnGlue.addTurnForGlue(new Turn(playerA, playerA, new HandOfHelpTurnType(), null, null));

    expect(turnGlue.glue().map(jestAnonymousFnFix)).toMatchObject([
      new Turn(playerA, playerA, new HandOfHelpTurnType(), new HandOfHelpTurnType(), new SelfTurnDirection()),
    ]);
  });

  it('should glue more complex turns correctly', () => {
    const turnGlue = new TurnGlue();

    const playerA = new CalculationPlayer(3, 3, 'playerA', 'playerA', 'playerA');
    const playerB = new CalculationPlayer(3, 3, 'playerB', 'playerB', 'playerB');
    const playerC = new CalculationPlayer(3, 3, 'playerC', 'playerC', 'playerC');
    const playerD = new CalculationPlayer(3, 3, 'playerD', 'playerD', 'playerD');
    const playerE = new CalculationPlayer(3, 3, 'playerE', 'playerE', 'playerE');
    const playerF = new CalculationPlayer(3, 3, 'playerF', 'playerF', 'playerF');
    const playerG = new CalculationPlayer(3, 3, 'playerG', 'playerG', 'playerG');
    
    turnGlue.addTurnForGlue(new Turn(playerA, playerA, new HandOfHelpTurnType(), null, null));
    turnGlue.addTurnForGlue(new Turn(playerB, playerB, new SkipTurnType(), null, null));
    turnGlue.addTurnForGlue(new Turn(playerC, playerA, new ScissorsTurnType(), null, null));
    turnGlue.addTurnForGlue(new Turn(playerD, playerB, new RockTurnType(), null, null));
    turnGlue.addTurnForGlue(new Turn(playerE, playerF, new ScissorsTurnType(), null, null));
    turnGlue.addTurnForGlue(new Turn(playerF, playerE, new RockTurnType(), null, null));
    turnGlue.addTurnForGlue(new Turn(playerG, playerA, new RockTurnType(), null, null));

    expect(turnGlue.glue().map(jestAnonymousFnFix)).toMatchObject([
      new Turn(playerA, playerA, new HandOfHelpTurnType(), new HandOfHelpTurnType(), new SelfTurnDirection()),
      new Turn(playerB, playerB, new SkipTurnType(), new SkipTurnType(), new SelfTurnDirection()),
      new Turn(playerC, playerA, new ScissorsTurnType(), new HandOfHelpTurnType(), new UnidirectionalTurnDirection()),
      new Turn(playerD, playerB, new RockTurnType(), new SkipTurnType(), new UnidirectionalTurnDirection()),
      new Turn(playerE, playerF, new ScissorsTurnType(), new RockTurnType(), new MutualTurnDirection()),
      new Turn(playerG, playerA, new RockTurnType(), new HandOfHelpTurnType(), new UnidirectionalTurnDirection()),
    ]);
  });
});