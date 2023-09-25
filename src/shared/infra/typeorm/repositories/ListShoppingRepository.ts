import { IShoppingListRepository } from '@modules/shoppingLists/repositories/IShoppingListRepository';

import { AppDataSource } from '../connection';
import { ShoppingList } from '../entities/ShoppingList';

class ShoppingListRepository implements IShoppingListRepository {
  async findOne(id: number): Promise<ShoppingList> {
    const list = AppDataSource.getRepository(ShoppingList).findOne({
      where: {
        id,
      },
    });

    return list;
  }
}

export { ShoppingListRepository };
