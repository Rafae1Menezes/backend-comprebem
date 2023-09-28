import { container } from 'tsyringe';

import { ICatalogRepository } from '../../modules/catalogs/repositories/ICatalogRepository';
import { IProductRepository } from '../../modules/products/repositories/IProductRepository';
import { IShoppingListRepository } from '../../modules/shoppingLists/repositories/IShoppingListRepository';
import { CatalogRepository } from '../infra/typeorm/repositories/catalogRepository';
import { ShoppingListRepository } from '../infra/typeorm/repositories/listShoppingRepository';
import { ProductRepository } from '../infra/typeorm/repositories/productRepository';

container.registerSingleton<IShoppingListRepository>(
  'ShoppingListRepository',
  ShoppingListRepository,
);

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);

container.registerSingleton<ICatalogRepository>(
  'CatalogRepository',
  CatalogRepository,
);
