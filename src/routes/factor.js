import { Router } from 'express'
const router = Router();

import * as factor from '../Controllers/factor'

router.get('/', factor.getAllfactor);
// router.get('/:id', factor.getOnefactor);
router.get('/:id', factor.getGroupfactores);



module.exports = router;