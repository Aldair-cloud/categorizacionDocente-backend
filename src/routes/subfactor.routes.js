import { Router } from 'express'
const router = Router();

import * as subfactor from '../Controllers/subfactor.controllers'
router.get('/', subfactor.readAllsubfactor);
router.get('/:id', subfactor.readOnesubfactor);


module.exports = router;

