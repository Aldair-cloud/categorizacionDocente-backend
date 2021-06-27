import { Router } from 'express'
const router = Router();

import * as item from '../Controllers/items'
router.get('/', item.getAllitems);
router.get('/:id', item.getOneItem);



module.exports = router;