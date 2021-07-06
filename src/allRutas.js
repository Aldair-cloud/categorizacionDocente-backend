
import express, { Router } from "express";
const appe = express();

// const factor = require('./routes/factor');
// appe.use('/crud', factor);

const item = require('./routes/items');
appe.use('/item',item);


const persona = require('./routes/persona')
appe.use('/persona',persona)

const usuario = require('./routes/usuario')
appe.use('/usuario',usuario)

const factor = require('./routes/factor')
appe.use('/factor',factor)

module.exports = appe;

