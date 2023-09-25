import { ShoppingList } from '@shared/infra/typeorm/entities/ShoppingList';

interface IShoppingListRepository {
  findOne(id: number): Promise<ShoppingList>;
}

export { IShoppingListRepository };
