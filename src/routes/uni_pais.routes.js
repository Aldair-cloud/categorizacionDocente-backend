import { Router } from 'express'
const router = Router();

import * as uni_pais from '../Controllers/uni_pais.controllers'

router.get('/universidad', uni_pais.readAllUniversidad);
router.get('/universidad/:id', uni_pais.readGroupUniversidad);
router.get('/pais', uni_pais.readAllpaises);

module.exports = router;