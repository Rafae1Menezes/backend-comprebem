import { IShoppingListRepository } from '../../../../modules/shoppingLists/repositories/IShoppingListRepository';
import { AppDataSource } from '../connection';
import { ShoppingList } from '../entities/ShoppingList';

class ShoppingListRepository implements IShoppingListRepository {
  private repository;

  constructor() {
    this.repository = AppDataSource.getRepository(ShoppingList);
  }

  async getShppingListsByUserId(userId: number) {
    const shoppingLists = await this.repository.find({
      where: {
        owner_id: userId,
      },
    });

    return shoppingLists;
  }

  async findOne(id: number): Promise<ShoppingList> {
    const list = this.repository
      .createQueryBuilder('shoppingList')
      .leftJoinAndSelect('shoppingList.products', 'products')
      .where('shoppingList.id = :id', { id })
      .getOne();
    return list;
  }

  async save(shoppingList: ShoppingList) {
    this.repository.save(shoppingList);
  }
}

export { ShoppingListRepository };
