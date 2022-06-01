import ICalculatable from "../ICalculatable";

export default class AttackingStrategy implements ICalculatable {
  // eslint-disable-next-line
  public calculate = (initiator, target, initiatorTurnType, targetTurnType) => {
    target.decreaseHealthBy(initiatorTurnType.getHealthCost());
  };
}