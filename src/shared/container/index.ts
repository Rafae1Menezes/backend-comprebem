import { container } from 'tsyringe';

import { IProductRepository } from '@modules/products/repositories/IProductRepository';
import { IShoppingListRepository } from '@modules/shoppingLists/repositories/IShoppingListRepository';
import { ShoppingListRepository } from '@shared/infra/typeorm/repositories/ListShoppingRepository';
import { ProductRepository } from '@shared/infra/typeorm/repositories/productRepository';

container.registerSingleton<IShoppingListRepository>(
  'ShoppingListRepository',
  ShoppingListRepository,
);

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);
