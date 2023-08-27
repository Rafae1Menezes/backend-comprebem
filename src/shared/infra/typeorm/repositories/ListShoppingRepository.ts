import { IListShoppingRepository } from '@modules/shoppingLists/repositories/IListShoppingRepository';

class ListShoppingRepository implements IListShoppingRepository {
  list(): string {
    const all = 'oi';
    return all;
  }
}

export { ListShoppingRepository };
