
import express, { Router } from "express";
const appe = express();

const factor = require('./routes/factor.routes')
appe.use('/factor',factor)

const grado = require('./routes/grado.routes')
appe.use('/grado', grado)

const item = require('./routes/items.routes');
appe.use('/item',item);

const persona = require('./routes/persona.routes')
appe.use('/persona',persona)

const subfactor = require('./routes/subfactor.routes')
appe.use('/subfactor',subfactor)

const uni_pais = require('./routes/uni_pais.routes')
appe.use('/uni_pais',uni_pais)

const usuario = require('./routes/usuario.routes')
appe.use('/usuario',usuario)

module.exports = appe;

