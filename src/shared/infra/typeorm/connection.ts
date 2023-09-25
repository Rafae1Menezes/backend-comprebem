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
  host: 'localhost',
  username: 'admin',
  password: '123456',
  database: 'comprebem_db',
  synchronize: true,
  logging: true,
  migrations: ['/src/shared/infra/typeorm/migrations/*.ts'],
  entities: [
    ShoppingList,
    ConsumerUser,
    Product,
    User,
    ConsumerUser,
    Catalog,
    Friendship,
    FriendshipRequest,
    SupermarketUser,
  ],
});
