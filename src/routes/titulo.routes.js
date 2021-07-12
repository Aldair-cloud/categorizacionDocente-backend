import { Router } from 'express'
const router = Router();

import * as titulo from '../Controllers/titulo.controllers'

router.get('/', titulo.readAlltitulo);
router.get('/:id', titulo.readTitutlo);
router.post('/', titulo.createTitulo);

router.put('/',titulo.updatenota);



module.exports = router;