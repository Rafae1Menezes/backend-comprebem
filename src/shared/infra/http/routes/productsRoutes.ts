import { Router } from 'express';

import { GetAllActiveProductsController } from '../../../../modules/products/useCases/GetAllActiveProductController';

const productsRoutes = Router();

const getAllActiveProductsUseCase = new GetAllActiveProductsController();

productsRoutes.get('/active', getAllActiveProductsUseCase.handle);

export { productsRoutes };
