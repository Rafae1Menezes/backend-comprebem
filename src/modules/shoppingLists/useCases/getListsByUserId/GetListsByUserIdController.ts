import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetListsByUserIdUseCase } from './GetListsByUserIdUseCase';

class GetListsByUserIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = parseInt(request.params.userId, 10);

    const getListsByUserIdUseCase = container.resolve(GetListsByUserIdUseCase);

    const res = await getListsByUserIdUseCase.execute({
      userId,
    });

    return response.status(200).json(res);
  }
}

export { GetListsByUserIdController };
