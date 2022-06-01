/* tslint:disable:no-console */
import IDataLogger from "./IDataLogger";

export default class ConsoleDataLogger implements IDataLogger {
  public log = (newData: Record<string, any>, eventName?: string) => {
    if (eventName) {
      console.log(`%c ${eventName} `, 'background: #222; color: #bada55');
    }

    console.log('%c @@MFE-FIGHT / new state', 'background: #CCCCCC; color: #000000', newData);
  };
}