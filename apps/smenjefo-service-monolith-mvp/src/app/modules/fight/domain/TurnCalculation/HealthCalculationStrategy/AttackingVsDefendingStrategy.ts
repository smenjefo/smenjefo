import ICalculatable from "../ICalculatable";

export default class AttackingVsDefendingStrategy implements ICalculatable {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public calculate = (initiator, target, initiatorTurnType, targetTurnType) => {
    const initiatorAttackingPoints = initiatorTurnType.getHealthCost();
    const targetDefencePoints = targetTurnType.getHealthCost();

    const residualDefencePoints = targetDefencePoints - initiatorAttackingPoints;

    if (residualDefencePoints < 0) {
      target.decreaseHealthBy(residualDefencePoints);
    }
  };
}