export default interface IWebSocket {
  on: (event: string, handler: (...args: any[]) => void) => void;
  emit: (event: string, args?: any) => void;
  removeAllListeners: () => void;
  disconnect(): void;
}