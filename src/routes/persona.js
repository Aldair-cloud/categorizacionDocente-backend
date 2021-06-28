import { Router } from 'express'
const router = Router();

import * as persona from '../Controllers/persona.controllers'
router.get('/getpais', persona.listarpais);
router.get('/getpersonas', persona.obtenerpersonas);

router.post('/postpersona', persona.crearpersona);



module.exports = router;