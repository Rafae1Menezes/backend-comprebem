import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '@modules/products/repositories/IProductRepository';
import { IShoppingListRepository } from '@modules/shoppingLists/repositories/IShoppingListRepository';

@injectable()
class AddProductToShoppingListUseCase {
  constructor(
    @inject('ShoppingListRepository')
    private shoppinglistRepository: IShoppingListRepository,
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute({ listId, productId }: { listId: number; productId: number }) {
    try {
      const shoppingList = await this.shoppinglistRepository.findOne(listId);
      const product = await this.productRepository.findOne(productId);

      return { shoppingList, product };
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { AddProductToShoppingListUseCase };
