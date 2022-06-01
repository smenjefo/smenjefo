import IModel from "../models/IModel";

export default interface IRepository<T extends IModel> {
  getAll(): T[];
  findOne(query: Record<string, any>): T;
  findAny(): T;
  insert(model: T): void;
  insertOrUpdate(model: T): void;
  insertMany(models: T[]): void;
  update(model: T, externalModelFromDB?: any): void;
  removeAll(): void;
}