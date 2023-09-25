import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AddProductToShoppingListUseCase } from './AddProductToShoppingListUseCase';

class AddProductToShoppingListController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listId = parseInt(request.params.listId, 10);
    const productId = parseInt(request.body.productId, 10);

    const addProductToShoppingListUseCase = container.resolve(
      AddProductToShoppingListUseCase,
    );

    const res = await addProductToShoppingListUseCase.execute({
      listId,
      productId,
    });

    return response.status(200).json(res);
  }
}

export { AddProductToShoppingListController };
