import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '../../../products/repositories/IProductRepository';
import { IShoppingListRepository } from '../../repositories/IShoppingListRepository';

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

      if (shoppingList) {
        if (!shoppingList.products) {
          shoppingList.products = [];
        }

        shoppingList.products.push(product);

        this.shoppinglistRepository.save(shoppingList);
      }

      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { AddProductToShoppingListUseCase };
