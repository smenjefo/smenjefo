import loki from 'lokijs';
import IDB from "./IDB";

export default class LokiJSDB implements IDB {
  private readonly db = new loki('db');

  public readonly idPrefix = '$loki';

  public createTable = (tableName: string) => {
    this.db.addCollection(tableName);
  };

  public insert = (tableName: string, data: any) => {
    this.db.getCollection(tableName).insert(data);
  };

  public getAll = (tableName: string): any[] => {
    return this.db.getCollection(tableName).find({});
  };

  public findOne = (tableName: string, query: Record<string, any>): any => {
    return this.db.getCollection(tableName).findOne(query);
  };

  public update = (tableName: string, data: any): any => {
    return this.db.getCollection(tableName).update(data);
  };

  public removeAll = (tableName: string) => {
    this.db.getCollection(tableName).findAndRemove({});
  };

  public toJSON = () => {
    const json = {};

    this.db.collections.map((collection) => {
      json[collection.name] = collection
        .find({})
        .map(({ $model, $loki, meta, ...data }) => {
          return data;
        });
    });

    return json;
  };
}