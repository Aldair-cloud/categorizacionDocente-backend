import { Router } from 'express'
const router = Router();

import * as idiomas from '../Controllers/idiomas.controller'

router.get('/', idiomas.readAllIdiomas);
router.get('/:id', idiomas.readIdiomas);
router.post('/', idiomas.createIdiomas);




module.exports = router;