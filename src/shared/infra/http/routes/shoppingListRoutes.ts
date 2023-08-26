import { Router } from "express";
import { ListShoppingListsController } from "../../../../modules/shoppingLists/useCases/ListShoppingLists/ListShoppingListsController";

const shoppingListRoutes = Router();

const listShoppingListsController = new ListShoppingListsController();

shoppingListRoutes.get("/", listShoppingListsController.handle);

export { shoppingListRoutes };
