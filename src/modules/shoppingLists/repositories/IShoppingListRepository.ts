import { ShoppingList } from '@shared/infra/typeorm/entities/ShoppingList';

interface IShoppingListRepository {
  getShppingListsByUserId(userId: number);
  findOne(id: number): Promise<ShoppingList>;
  save(shoppingList: ShoppingList);
}

export { IShoppingListRepository };
