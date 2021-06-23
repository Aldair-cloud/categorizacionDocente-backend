import { pool } from '../database'


export const readAllpersonas = async(req, res) => {
    try {
        const response = await pool.query('select * from pais');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}