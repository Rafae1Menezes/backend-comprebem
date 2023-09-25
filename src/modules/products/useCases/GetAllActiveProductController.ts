import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetAllActiveProductsUseCase } from './GetAllActiveProductsUseCase';

class GetAllActiveProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllActiveProductsUseCase = container.resolve(
      GetAllActiveProductsUseCase,
    );

    const res = await getAllActiveProductsUseCase.execute();

    console.log(res);

    return response.status(200).json(res);
  }
}

export { GetAllActiveProductsController };
