import { container } from "tsyringe";
import { ListShoppingRepository } from "../../modules/shoppingLists/infra/repositories/ListShoppingRepository";

container.registerSingleton<IListShoppingRepository>(
  "ListShoppingRepository",
  ListShoppingRepository
);
