import express from "express";
import morgan from "morgan";

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//RUTAS
const allrutas = require('./allRutas');
app.use(allrutas)




//DATABASE
const {pg} = require('./database');


export default app;
