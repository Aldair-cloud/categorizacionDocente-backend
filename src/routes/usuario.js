import { Router } from 'express'
const router = Router();

import * as usuario from '../Controllers/usuario.controller'
const { checkToken } = require('../auth/tokenValidation');

router.get('/:id', usuario.readUser);
router.get('/',usuario.readAllUsers);
router.post('/', usuario.createUser);



module.exports=router