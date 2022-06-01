import IRepository from '../../../../data/repository/IRepository';

export default class RepositoryMock implements IRepository<any> {
  public readonly getAll: any;
  public readonly findOne: any;
  public readonly findAny: any;
  public readonly insert: any;
  public readonly insertOrUpdate: any;
  public readonly insertMany: any;
  public readonly update: any;
  public readonly removeAll: any;

  constructor(
    private readonly jest: any,
  ) {
    this.getAll = this.jest.fn();
    this.findOne = this.jest.fn();
    this.findAny = this.jest.fn();
    this.insert = this.jest.fn();
    this.insertOrUpdate = this.jest.fn();
    this.insertMany = this.jest.fn();
    this.update = this.jest.fn();
    this.removeAll = this.jest.fn();
  }
}