import { Router } from 'express';

import { shoppingListRoutes } from './shoppingListRoutes';

const router = Router();

const mainRoutes = Router();

mainRoutes.get('/', (req, res) => res.send('Oi'));

router.use('/shoppingList', shoppingListRoutes);
router.use('/', mainRoutes);

export { router };
