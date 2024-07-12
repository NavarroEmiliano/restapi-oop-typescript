import express, { Application } from "express";

class Server {
  private readonly app: Application;
  private readonly port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`🚀Server running on port ${this.port}`);
    });
  }
}

const PORT = 3000;

const server = new Server(PORT);
server.start();
