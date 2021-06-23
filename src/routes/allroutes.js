// const express = require('express');
// const router = express.Router();


import { Router } from 'express'
const router = Router();

import * as userCtr from '../Controllers/persona.controller'
router.get('/', userCtr.readAllpersonas);

//USUARIO
// router.get('/',(request,response)=>{
//     response.send('HOLA, SALE COD? :V')
// });


//PERSONA

//ITEMS
module.exports = router;