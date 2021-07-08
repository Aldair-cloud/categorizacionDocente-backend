import { pool } from '../database'

//UNIVERSIDADES

export const readAllUniversidad = async(req, res) => {
    try {
        const response = await pool.query('select * from universidad');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}

export const readGroupUniversidad = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from UNIVERSIDAD where idpais=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

//PAIS

export const readAllpaises = async(req, res) => {
    try {
        const response = await pool.query('select * from pais');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}