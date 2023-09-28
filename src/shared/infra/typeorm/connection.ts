import { DataSource } from 'typeorm';

import { Catalog } from './entities/Catalog';
import { ConsumerUser } from './entities/ConsumerUser';
import { Friendship } from './entities/Friendship';
import { FriendshipRequest } from './entities/FriendshipRequest';
import { Product } from './entities/Product';
import { ShoppingList } from './entities/ShoppingList';
import { SupermarketUser } from './entities/SupermarketUser';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_NAME || 'comprebem_db',
  synchronize: true,
  logging: true,
  migrations: ['/src/shared/infra/typeorm/migrations/*.ts'],
  entities: [
    ShoppingList,
    ConsumerUser,
    Product,
    User,
    Catalog,
    Friendship,
    FriendshipRequest,
    SupermarketUser,
  ],
});
