import express from 'express';
import HttpServer, { AnyFunction } from './http-server';

export default class ExpressAdapter implements HttpServer {
  private readonly app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  on(method: string, url: string, callback: AnyFunction): void {
    this.app[method](url, async function (req: any, res: any) {
      try {
        const output = await callback(req.params, req.body);
        res.json(output);
      } catch (e: any) {
        res.status(422).json({ message: e.message });
      }
    });
  }

  listen(port: number): void {
    this.app.listen(port);
  }
}
