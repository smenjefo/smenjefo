import IModel from '../../../../data/models/IModel';

export default class PlayerMock implements IModel {
  public readonly getId;
  public readonly getEntityId;

  constructor(
    private readonly jest: any,
  ) {
    this.getId = this.jest.fn();
    this.getEntityId = this.jest.fn();
  }

  public toJSON = () => {
    return {};
  };
}