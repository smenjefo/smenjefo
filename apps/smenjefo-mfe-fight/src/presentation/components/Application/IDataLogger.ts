export default interface IDataLogger {
  log(newData: Record<string, any>, eventName?: string): void;
}