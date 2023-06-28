import express from "express";
import HttpServer from "./http-server";

export default class ExpressAdapter implements HttpServer {
    private app: any
    constructor() {
        this.app = express();
        this.app.use(express.json())
    }
    on(method: string, url: string, callback: Function): void {
        throw new Error("Method not implemented.");
    }
    listen(port: number): void {
        this.app.listen(port);
    }
}