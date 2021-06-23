import express from "express";
import morgan from "morgan";
import allRoutes from './routes/allroutes'



const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//RUTAS
app.use('/CAD', allRoutes);


//DATABASE

const {pg} = require('./database');

export default app;
