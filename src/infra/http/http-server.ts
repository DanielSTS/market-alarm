export type AnyFunction = (...args: any[]) => any;

export default interface HttpServer {
  on(method: string, url: string, callback: AnyFunction): void;
  listen(port: number): void;
}
