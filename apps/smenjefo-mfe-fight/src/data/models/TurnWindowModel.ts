import IModel from "./IModel";
import TurnWindowTurn from "./TurnWindowTurn";

export default class TurnWindowModel implements IModel {
  constructor(
    private isOpened: boolean,
    private turnList: TurnWindowTurn[],
    private initiatorId: string,
    private targetId: string,
  ) {}

  public getIsOpened = () => {
    return this.isOpened;
  };

  public getInitiatorId = () => {
    return this.initiatorId;
  };

  public getTargetId = () => {
    return this.targetId;
  };

  public setIsOpened = (isOpened: boolean) => {
    this.isOpened = isOpened;
  };

  public setTurnList = (turnList: TurnWindowTurn[]) => {
    this.turnList = turnList;
  };

  public setInitiatorId = (initiatorId: string) => {
    this.initiatorId = initiatorId;
  };

  public setTargetId = (targetId: string) => {
    this.targetId = targetId;
  };

  public toJSON = () => {
    return {
      isOpened: this.isOpened,
      turnList: this.turnList.map((turn) => {
        return turn.toJSON();
      }),
    };
  };
}