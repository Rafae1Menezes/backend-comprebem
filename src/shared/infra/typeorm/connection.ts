import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'adm',
  password: '123',
  database: 'comprebem_db',
  synchronize: true,
  logging: true,
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  entities: ['./src/modules/**/entities/*.ts'],
});

AppDataSource.initialize();
