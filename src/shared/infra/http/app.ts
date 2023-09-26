import '@shared/container';

import cors from 'cors';
import express from 'express';

import { AppDataSource } from '../typeorm/connection';
import { router } from './routes';

AppDataSource.initialize()
  .then(async () => {
    console.log('Connection initialized with database...');
  })
  .catch((error) => console.log(error));

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

export { app };
