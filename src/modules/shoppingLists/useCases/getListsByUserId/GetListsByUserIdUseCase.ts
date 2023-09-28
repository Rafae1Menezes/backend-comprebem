import { inject, injectable } from 'tsyringe';

import { IShoppingListRepository } from '../../repositories/IShoppingListRepository';

@injectable()
class GetListsByUserIdUseCase {
  constructor(
    @inject('ShoppingListRepository')
    private shoppinglistRepository: IShoppingListRepository,
  ) {}

  async execute({ userId }: { userId: number }) {
    try {
      const lists =
        await this.shoppinglistRepository.getShppingListsByUserId(userId);

      return lists;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { GetListsByUserIdUseCase };
