export default interface IHttpService {
  get(url: string, query?: Record<string, any>): Promise<any>;
  post(url: string, data: Record<string, any>): Promise<any>;
  put(url: string, data: Record<string, any>): Promise<any>;
  patch(url: string, data: Record<string, any>): Promise<any>;
  delete(url: string): Promise<any>;
}