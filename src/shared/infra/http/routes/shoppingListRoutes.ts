import { Router } from 'express';

import { AddProductToShoppingListController } from '@modules/shoppingLists/useCases/addProductToShoppingList/AddProductToShoppingListController';

const shoppingListRoutes = Router();

const addProductToShoppingListController =
  new AddProductToShoppingListController();

shoppingListRoutes.post(
  '/add-product/:listId/:productId',
  addProductToShoppingListController.handle,
);

export { shoppingListRoutes };
