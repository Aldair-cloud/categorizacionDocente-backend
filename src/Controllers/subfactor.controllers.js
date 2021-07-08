import { pool } from '../database'


export const readAllsubfactor = async(req, res) => {
    try {
        const response = await pool.query('select * from subfactor');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}

export const readOnesubfactor = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from subfactor where idfactor=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}