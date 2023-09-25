import { Router } from 'express';

import { productsRoutes } from './productsRoutes';
import { shoppingListRoutes } from './shoppingListRoutes';

const router = Router();

const mainRoutes = Router();

mainRoutes.get('/', (req, res) => res.send('Oi'));

router.use('/shopping-lists', shoppingListRoutes);
router.use('/products', productsRoutes);
router.use('/', mainRoutes);

export { router };
