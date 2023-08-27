import { container } from 'tsyringe';

import { IListShoppingRepository } from '@modules/shoppingLists/repositories/IListShoppingRepository';
import { ListShoppingRepository } from '@shared/infra/typeorm/repositories/ListShoppingRepository';

container.registerSingleton<IListShoppingRepository>(
  'ListShoppingRepository',
  ListShoppingRepository,
);
