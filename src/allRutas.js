
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

const legajo= require('./routes/legajo')
appe.use('/legajo',legajo)

const titulo = require('./routes/titulo.routes')
appe.use('/titulo',titulo)

const diplomatura = require('./routes/diplomatura.routes')
appe.use('/diplomatura',diplomatura)


module.exports = appe;

