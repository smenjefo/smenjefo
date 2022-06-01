export default interface IModel {
  $id?: string;
  toJSON: () => Record<string, any>;
}