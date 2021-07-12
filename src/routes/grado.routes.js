import { Router } from 'express'
const router = Router();

import * as grado from '../Controllers/grado.controllers'

router.get('/', grado.readAllGrados);
router.get('/:id', grado.readGrado);
router.post('/',grado.createGrado);
router.put('/',grado.updatenota);



module.exports = router;