import { pool } from '../database'
const jwt = require('jsonwebtoken')


export const readUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from usuario where idusuario=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

export const readAllUsers = async (req, res) => {
    try {
        const response = await pool.query('select * from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}


export const createUser = async (req, res) => {

    try {
        const { usuario, password, iddocente } = req.body;
        await pool.query('insert into usuario ( usuario, password, iddocente) values($1, $2, $3)', [usuario, password, iddocente]);
        jwt.sign(res.body, 'Secret Key', (error, token) => {
            res.json({
                token: token
            })
        })
        return res.status(200).json(
            `Usuario ${usuario} creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

// export const createUser = async(request,response)=>{

//     const { usuario, password, iddocente } = request.body;
//     //generando token
//     jwt.sign(request.body,'Secret Key',(error,token)=>{
//         response.json({
//             token: token
//         })
//     })
//     console.log(request.body);

// }