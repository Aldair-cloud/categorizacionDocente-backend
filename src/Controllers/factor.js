import { pool } from '../database'

export const getAllfactor = async(req, res) => {
    try {
        const response = await pool.query('select *from factor');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}

// export const getOnefactor = async(req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const response = await pool.query('select * from factor where idfactor=$1', [id]);
//         return res.status(200).json(response.rows);
//     } catch (e) {
//         console.log(e);
//         return res.status(500).json('Error Interno...!');
//     }
// }

export const getGroupfactores = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from factor where iditem=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}