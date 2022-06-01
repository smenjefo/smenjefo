import IDataPublisher from '../../../../data/DataPublisher/IDataPublisher';

export default class DataPublisherMock implements IDataPublisher {
  public readonly subscribe;
  public readonly notifyAll;

  constructor(
    private readonly jest: any,
  ) {
    this.subscribe = this.jest.fn();
    this.notifyAll = this.jest.fn();
  }
}