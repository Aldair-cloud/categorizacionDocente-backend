import { pool } from '../database'
var nodemailer = require('nodemailer');

export const listarpais = async(req, res) => {
    try {
        const response = await pool.query('select * from pais');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}
export const crearpersona=async(req,res)=>{
    try {
       const  {nombres,apellidos,telefono,correo,dni,sexo,direccion,idpais,foto}=req.body;
        const response = await   pool.query('insert into persona(nombres,apellidos,telefono,correo,dni,sexo,direccion,idpais,foto,estado) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [nombres,apellidos,telefono,correo,dni,sexo,direccion,idpais,foto,'ES']);
        return res.status(200).json(
            `La persona  ${ nombres } ha sido creada correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}
export const obtenerpersonas= async(req,res)=>{
     const  estado  = req.params.estado
    try {
        const response = await pool.query('select * from persona where estado = $1', [estado]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}