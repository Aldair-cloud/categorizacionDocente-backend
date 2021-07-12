import { Router } from 'express'
const router = Router();

import * as diplomatura from '../Controllers/diplomatura.controllers'

router.get('/', diplomatura.readAllDiplomatura);
router.get('/:id', diplomatura.readDiplomatura);
router.post('/', diplomatura.createDiplomatura);
router.put('/',diplomatura.updatenota);

module.exports = router;