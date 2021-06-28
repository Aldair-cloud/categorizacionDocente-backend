
import express from "express";
const appe = express();


const factor = require('./routes/factor');
appe.use('/crud', factor);

const item = require('./routes/items');
appe.use('/item',item);


const persona = require('./routes/persona')
appe.use('/persona',persona)

module.exports = appe;

