import { Router } from "express";
import { shoppingListRoutes } from "./shoppingListRoutes";

const router = Router();

router.use("/shoppingList", shoppingListRoutes);

export { router };
