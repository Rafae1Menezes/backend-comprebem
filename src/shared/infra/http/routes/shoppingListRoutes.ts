import { Router } from 'express';

import { AddProductToShoppingListController } from '@modules/shoppingLists/useCases/addProductToShoppingList/AddProductToShoppingListController';
import { GetListsByUserIdController } from '@modules/shoppingLists/useCases/getListsByUserId/GetListsByUserIdController';

const shoppingListRoutes = Router();

const addProductToShoppingListController =
  new AddProductToShoppingListController();

const getListsByUserIdController = new GetListsByUserIdController();

shoppingListRoutes.post(
  '/:listId/products',
  addProductToShoppingListController.handle,
);

shoppingListRoutes.get('/user/:userId', getListsByUserIdController.handle);

export { shoppingListRoutes };
