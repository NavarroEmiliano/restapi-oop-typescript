import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './router/user.router';

class ServerBootstrap {
  public app: express.Application = express();
  private readonly port: number = 3000;

  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use('/api',this.routers());
    this.listen();
  }

  routers(): express.Router[] {
    return [new UserRouter().router];
  }

  private listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀Server running on port ${this.port}`);
    });
  }
}

new ServerBootstrap();
