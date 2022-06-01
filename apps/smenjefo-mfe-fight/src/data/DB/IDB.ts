export default interface IDB {
  readonly idPrefix: string;
  getAll: (tableName: string) => any[];
  createTable: (tableName: string) => void;
  insert: (tableName: string, data: any) => void;
  findOne: (tableName: string, query: Record<string, any>) => any;
  toJSON: () => Record<string, any>;
  update: (tableName: string, data: any) => any;
  removeAll: (tableName: string) => any;
}