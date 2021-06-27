import { pool } from '../database'

export const getAllitems = async(req, res) => {
    try {
        const response = await pool.query('select * from items');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}
export const getOneItem = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from items where iditem=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}