type IDataSubscriber = (message: Record<string, any>, eventName?: string) => void;

export default IDataSubscriber;