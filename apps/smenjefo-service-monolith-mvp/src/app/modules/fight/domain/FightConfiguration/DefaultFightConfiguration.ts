import IFightConfiguration from "./IFightConfiguration";

export default class DefaultFightConfiguration implements IFightConfiguration {
  public timeForTurn = 30;
  public initialPlayerHealthPoints = 3;
  public initialPlayerEnergy = 3;
}