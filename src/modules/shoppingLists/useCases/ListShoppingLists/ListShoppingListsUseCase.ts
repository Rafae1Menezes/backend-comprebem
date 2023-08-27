import { inject, injectable } from 'tsyringe';

import { IListShoppingRepository } from '@modules/shoppingLists/repositories/IListShoppingRepository';

@injectable()
class ListShoppingUseCase {
  constructor(
    @inject('ListShoppingRepository')
    private listShoppingRepository: IListShoppingRepository,
  ) {}

  async execute() {
    const all = await this.listShoppingRepository.list();
    return all;
  }
}

export { ListShoppingUseCase };
