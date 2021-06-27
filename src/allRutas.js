
import express from "express";
const appe = express();


const factor = require('./routes/factor');
appe.use('/crud', factor);

const item = require('./routes/items');
appe.use('/item',item);


module.exports = appe;

