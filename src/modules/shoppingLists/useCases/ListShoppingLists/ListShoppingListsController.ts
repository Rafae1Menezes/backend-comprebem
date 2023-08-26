import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListShoppingUseCase } from "./ListShoppingListsUseCase";

class ListShoppingListsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listShoppingListsUseCase = container.resolve(ListShoppingUseCase);

    const all = await listShoppingListsUseCase.execute();

    return response.status(200).json(all);
  }
}

export { ListShoppingListsController };
