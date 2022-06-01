import IDB from "../DB/IDB";
import IModel from "../models/IModel";
import IRepository from "./IRepository";

export type RepositoryNames = 'myPlayer' | 'players' | 'teams' | 'status' | 'history' | 'turnWindow';

export default class Repository<T extends IModel> implements IRepository<T> {
  constructor(
    private readonly name: RepositoryNames,
    private readonly db: IDB,
  ) {
    this.db.createTable(this.name);
  }

  private getModelFromDB = (modelId: any) => {
    return this.db.findOne(this.name, { [this.db.idPrefix]: modelId });
  };

  public getAll = (): T[] => {
    const result = this.db.getAll(this.name);

    if (!result) {
      return [];
    }

    return result.map((resultData) => {
      resultData.$model.$id = resultData[this.db.idPrefix];

      return resultData.$model;
    });
  };

  public findOne = (query: Record<string, any>): T => {
    const result = this.db.findOne(this.name, query);

    if (!result) {
      return result;
    }

    result.$model.$id = result[this.db.idPrefix];

    return result.$model;
  };

  public findAny = (): T => {
    return this.findOne({});
  };

  public insert = (model: T) => {
    this.db.insert(this.name, {
      ...model.toJSON(),
      $model: model,
    });
  };

  public insertOrUpdate = (model: T) => {
    const modelId = model.$id;

    const modelFromDB = this.getModelFromDB(modelId);

    if (modelFromDB) {
      this.update(model, modelFromDB);
    } else {
      this.insert(model);
    }
  };

  public insertMany = (models: T[]) => {
    this.db.insert(this.name, models.map((model) => {
      return {
        ...model.toJSON(),
        $model: model,
      };
    }));
  };

  public update = (model: T, externalModelFromDB?: any) => {
    const modelId = model.$id;

    const modelFromDB = externalModelFromDB || this.getModelFromDB(modelId);
    const json = {...model.toJSON()};

    Object.keys(json).forEach((key) => {
      modelFromDB[key] = json[key];
    });

    modelFromDB.$model = model;

    this.db.update(this.name, modelFromDB);
  };

  public removeAll = () => {
    this.db.removeAll(this.name);
  };
}