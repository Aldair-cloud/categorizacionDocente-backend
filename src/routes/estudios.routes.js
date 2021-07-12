import { Router } from 'express'
const router = Router();

import * as estudios from '../Controllers/estudios.controller'

router.get('/', estudios.readAllestudios);
router.get('/:id', estudios.readEstudios);
router.post('/', estudios.createEstudios);




module.exports = router;