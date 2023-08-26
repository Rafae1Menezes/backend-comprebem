import { container } from 'tsyringe';

import { ListShoppingRepository } from '@modules/shoppingLists/infra/repositories/ListShoppingRepository';
import { IListShoppingRepository } from '@modules/shoppingLists/repositories/IListShoppingRepository';

container.registerSingleton<IListShoppingRepository>(
  'ListShoppingRepository',
  ListShoppingRepository,
);
