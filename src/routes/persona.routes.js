import { Router } from 'express'
const router = Router();

import * as persona from '../Controllers/persona.controllers'
router.get('/getpais', persona.listarpais);
router.get('/getpersonas', persona.obtenerpersonas);

router.post('/postpersona', persona.crearpersona);
router.post('/postuser',persona.crearuser);
router.get('/allpersona/:estado',persona.obtenerpersonas);
router.get('/enviarcorreo',persona.enviarcorreo);
router.get('/getusers',persona.obtenerusers);
router.get('/getcat',persona.obtenercat);
router.get('/getsub/:id',persona.getsubfactores);
router.get('/getfactor/:id',persona.getfactor)
router.get('/getitem',persona.getitems);
router.get('/getdocente',persona.listardocentes);

router.get('/getdocente/:id',persona.listardocente);
module.exports = router;