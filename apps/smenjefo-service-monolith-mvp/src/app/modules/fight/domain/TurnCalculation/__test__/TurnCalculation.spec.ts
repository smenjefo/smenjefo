import CalculationPlayer from "../../CalculationPlayer/CalculationPlayer";
import TurnDirectionFactory from "../../TurnDirection/TurnDirectionFactory";
import TurnTypeFactory from "../../TurnType/TurnTypeFactory";
import TurnCalculation from "../TurnCalculation";

// TODO: refactor later, may be :)

describe(`TurnCalculation`, () => {
  const INITIAL_HEALTH_POINTS = 3;
  const INITIAL_ENERGY_POINTS = 3;

  const getTurnCalculation = (initiatorTurnType: string, targetTurnType: string, turnDirection: string) => {
    const turnTypeFactory = new TurnTypeFactory();
    const turnDirectionFactory = new TurnDirectionFactory();

    const initiator = new CalculationPlayer(
      INITIAL_HEALTH_POINTS,
      INITIAL_ENERGY_POINTS,
      'playerOneEntityId',
      'playerOne',
      'teamOne',
    );

    const target = new CalculationPlayer(
      INITIAL_HEALTH_POINTS,
      INITIAL_ENERGY_POINTS,
      'playerTwoEntityId',
      'playerTwo',
      'teamTwo',
    );

    const turnCalculation = new TurnCalculation(
      turnDirectionFactory.create(turnDirection),
    );

    turnCalculation.calculate(
      initiator,
      target,
      turnTypeFactory.create(initiatorTurnType),
      turnTypeFactory.create(targetTurnType),
    );

    return {
      initiator,
      target,
    };
  };

  const getCalcExpectations = (initiatorHealth, initiatorEnergy, targetHealth, targetEnergy) => {
    return {
      initiatorHealth: INITIAL_HEALTH_POINTS + initiatorHealth,
      initiatorEnergy: INITIAL_ENERGY_POINTS + initiatorEnergy,
      targetHealth: INITIAL_HEALTH_POINTS + targetHealth,
      targetEnergy: INITIAL_ENERGY_POINTS + targetEnergy,
    };
  };

  const attackingTurnTypes = ['rock', 'scissors', 'paper', 'superRock', 'superScissors', 'superPaper'];
  const defensiveTurnTypes = ['cheat'];
  const helpingTurnTypes = ['handOfHelp', 'donor'];
  const systemTurnTypes = ['skip'];

  const allTurnTypes = [
    ...attackingTurnTypes,
    ...defensiveTurnTypes,
    ...helpingTurnTypes,
    ...systemTurnTypes,
  ];

  const mutualAttackingCombinations = [
    // rock, scissors, paper
    [
      getCalcExpectations(0, 0, 0, 0),
      getCalcExpectations(0, 0, -1, 0),
      getCalcExpectations(-1, 0, 0, 0),
      getCalcExpectations(0, 0, 0, -2),
      getCalcExpectations(0, 0, -3, -2),
      getCalcExpectations(-3, 0, 0, -2),
      getCalcExpectations(0, 0, 0, -3),
      getCalcExpectations(0, 0, -1, -1),
      getCalcExpectations(0, 0, -1, -1),
      getCalcExpectations(0, 0, -1, 0),
    ],
    [
      getCalcExpectations(-1, 0, 0, 0),
      getCalcExpectations(0, 0, 0, 0),
      getCalcExpectations(0, 0, -1, 0),
      getCalcExpectations(-3, 0, 0, -2),
      getCalcExpectations(0, 0, 0, -2),
      getCalcExpectations(0, 0, -3, -2),
      getCalcExpectations(0, 0, 0, -3),
      getCalcExpectations(0, 0, -1, -1),
      getCalcExpectations(0, 0, -1, -1),
      getCalcExpectations(0, 0, -1, 0),
    ],
    [
      getCalcExpectations(0, 0, -1, 0),
      getCalcExpectations(-1, 0, 0, 0),
      getCalcExpectations(0, 0, 0, 0),
      getCalcExpectations(0, 0, -3, -2),
      getCalcExpectations(-3, 0, 0, -2),
      getCalcExpectations(0, 0, 0, -2),
      getCalcExpectations(0, 0, 0, -3),
      getCalcExpectations(0, 0, -1, -1),
      getCalcExpectations(0, 0, -1, -1),
      getCalcExpectations(0, 0, -1, 0),
    ],

    // superRock, superScissors, superPaper
    [
      getCalcExpectations(0, -2, 0, 0),
      getCalcExpectations(0, -2, -3, 0),
      getCalcExpectations(-3, -2, 0, 0),
      getCalcExpectations(0, -2, 0, -2),
      getCalcExpectations(0, -2, -3, -2),
      getCalcExpectations(-3, -2, 0, -2),
      getCalcExpectations(0, -2, 0, -3),
      getCalcExpectations(0, -2, -3, -1),
      getCalcExpectations(0, -2, -3, -1),
      getCalcExpectations(0, -2, -3, 0),
    ],
    [
      getCalcExpectations(-3, -2, 0, 0),
      getCalcExpectations(0, -2, 0, 0),
      getCalcExpectations(0, -2, -3, 0),
      getCalcExpectations(-3, -2, 0, -2),
      getCalcExpectations(0, -2, 0, -2),
      getCalcExpectations(0, -2, -3, -2),
      getCalcExpectations(0, -2, 0, -3),
      getCalcExpectations(0, -2, -3, -1),
      getCalcExpectations(0, -2, -3, -1),
      getCalcExpectations(0, -2, -3, 0),
    ],
    [
      getCalcExpectations(0, -2, -3, 0),
      getCalcExpectations(-3, -2, 0, 0),
      getCalcExpectations(0, -2, 0, 0),
      getCalcExpectations(0, -2, -3, -2),
      getCalcExpectations(-3, -2, 0, -2),
      getCalcExpectations(0, -2, 0, -2),
      getCalcExpectations(0, -2, 0, -3),
      getCalcExpectations(0, -2, -3, -1),
      getCalcExpectations(0, -2, -3, -1),
      getCalcExpectations(0, -2, -3, 0),
    ],
  ];

  // target player does not spend energy in unidirectional turn
  const unidirectionalAttackingCombinations = mutualAttackingCombinations.map((mutualAttackingCombinationList) => {
    return mutualAttackingCombinationList.map((mutualAttackingCombination) => {
      return {
        ...mutualAttackingCombination,
        targetEnergy: INITIAL_ENERGY_POINTS,
      };
    });
  });

  const mutualHelpingCombinations = [
    // handOfHelp, donor
    [
      getCalcExpectations(+1, -1, +1, -1),
      getCalcExpectations(0, 0, +1, -1),
    ],
    [
      getCalcExpectations(+1, -1, 0, 0),
      getCalcExpectations(0, 0, 0, 0),
    ],
  ];

  const unidirectionalHelpingCombinations = [
    // handOfHelp, donor
    [
      getCalcExpectations(0, -1, +1, 0),
      getCalcExpectations(0, -1, +1, 0),
      getCalcExpectations(0, -1, +1, 0),
      getCalcExpectations(0, -1, +1, 0),
      getCalcExpectations(0, -1, +1, 0),
      getCalcExpectations(0, -1, +1, 0),
      getCalcExpectations(0, -1, +1, 0),
      getCalcExpectations(0, -1, +1, 0),
      getCalcExpectations(0, -1, +1, 0),
      getCalcExpectations(0, -1, +1, 0),
    ],
    [
      getCalcExpectations(0, -1, 0, +1),
      getCalcExpectations(0, -1, 0, +1),
      getCalcExpectations(0, -1, 0, +1),
      getCalcExpectations(0, -1, 0, +1),
      getCalcExpectations(0, -1, 0, +1),
      getCalcExpectations(0, -1, 0, +1),
      getCalcExpectations(0, -1, 0, +1),
      getCalcExpectations(0, -1, 0, +1),
      getCalcExpectations(0, -1, 0, +1),
      getCalcExpectations(0, -1, 0, +1),
    ],
  ];

  const selfHelpingCombinations = [
    // handOfHelp
    [
      getCalcExpectations(+1, -1, 0, 0),
    ],
    // donor
    [
      getCalcExpectations(0, -1, 0, 0),
    ],
  ];

  const selfSystemCombinations = [
    // skip
    [
      getCalcExpectations(0, 0, 0, 0),
    ],
  ];

  const getSeparator = (turnDirection) => {
    if (turnDirection === 'mutual') {
      return '<->';
    }

    if (turnDirection === 'unidirectional') {
      return '->';
    }

    if (turnDirection === 'self') {
      return '<-';
    }
  };

  const makeTest = ({ name, turnDirection, initiatorTurnTypes, targetTurnTypes, combinations }) => {
    describe(`${name} ${turnDirection} combinations`, () => {
      for (let i = 0; i < initiatorTurnTypes.length; i++) {

        describe(`${initiatorTurnTypes[i]}`, () => {
          for (let j = 0; j < targetTurnTypes.length; j++) {
            const combinationByDirection = combinations[i][j];
            const initiatorTurnType = initiatorTurnTypes[i];
            const targetTurnType = targetTurnTypes[j];

            it(
              `${initiatorTurnType} ${getSeparator(turnDirection)} ${targetTurnType}
              (initiator: ${INITIAL_HEALTH_POINTS} -> ${combinationByDirection.initiatorHealth} hp, ${INITIAL_ENERGY_POINTS} -> ${combinationByDirection.initiatorEnergy} energy)
              (target: ${INITIAL_HEALTH_POINTS} -> ${combinationByDirection.targetHealth} hp, ${INITIAL_ENERGY_POINTS} -> ${combinationByDirection.targetEnergy} energy)
            `, () => {
              const turnCalculation = getTurnCalculation(initiatorTurnType, targetTurnType, turnDirection);

              expect(turnCalculation.initiator.getHealth()).toBe(combinationByDirection.initiatorHealth);
              expect(turnCalculation.initiator.getEnergy()).toBe(combinationByDirection.initiatorEnergy);
              expect(turnCalculation.target.getHealth()).toBe(combinationByDirection.targetHealth);
              expect(turnCalculation.target.getEnergy()).toBe(combinationByDirection.targetEnergy);
            });
          }
        });
      }
    });
  };

  makeTest({
    name: 'attacking',
    turnDirection: 'mutual',
    initiatorTurnTypes: attackingTurnTypes,
    targetTurnTypes: allTurnTypes,
    combinations: mutualAttackingCombinations,
  });

  makeTest({
    name: 'attacking',
    turnDirection: 'unidirectional',
    initiatorTurnTypes: attackingTurnTypes,
    targetTurnTypes: allTurnTypes,
    combinations: unidirectionalAttackingCombinations,
  });

  makeTest({
    name: 'helping',
    turnDirection: 'mutual',
    initiatorTurnTypes: helpingTurnTypes,
    targetTurnTypes: helpingTurnTypes,
    combinations: mutualHelpingCombinations,
  });

  makeTest({
    name: 'helping',
    turnDirection: 'unidirectional',
    initiatorTurnTypes: helpingTurnTypes,
    targetTurnTypes: allTurnTypes,
    combinations: unidirectionalHelpingCombinations,
  });

  makeTest({
    name: 'helping',
    turnDirection: 'self',
    initiatorTurnTypes: helpingTurnTypes.slice(0, 1),
    targetTurnTypes: helpingTurnTypes.slice(0, 1),
    combinations: selfHelpingCombinations.slice(0, 1),
  });

  makeTest({
    name: 'helping',
    turnDirection: 'self',
    initiatorTurnTypes: helpingTurnTypes.slice(-1),
    targetTurnTypes: helpingTurnTypes.slice(-1),
    combinations: selfHelpingCombinations.slice(-1),
  });

  makeTest({
    name: 'system',
    turnDirection: 'self',
    initiatorTurnTypes: systemTurnTypes,
    targetTurnTypes: systemTurnTypes,
    combinations: selfSystemCombinations,
  });
});