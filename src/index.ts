import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './shared/router/user.router';
import { ConfigServer } from './config/config';
import { DataSource } from 'typeorm';

class ServerBootstrap extends ConfigServer {
  public app: express.Application = express();
  private readonly port: number = this.getNumberEnv('PORT');

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.dbConnect();
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use('/api', this.routers());
    this.listen();
  }

  routers(): express.Router[] {
    return [new UserRouter().router];
  }

  async dbConnect(): Promise<DataSource> {
    try {
      const dataSource = new DataSource(this.typeORMConfig);
      await dataSource.initialize();
      return dataSource;
    } catch (error) {
      console.error('Error initializing database:', error);
      throw error;
    }
  }
  

  private listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀Server running on port ${this.port}`);
    });
  }
}

new ServerBootstrap();
