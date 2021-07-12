import { pool } from '../database'


export const readAlltitulo = async(req, res) => {
    try {
        const response = await pool.query('select *from titulo');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}

export const readTitutlo = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT * FROM TITULO WHERE idusuario= $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}


export const createTitulo = async(req, res) => {
    try {
        const { idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,idusuario,years,nota,creditos } = req.body;
        await pool.query('insert into titulo (idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,idusuario,years,nota,creditos) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,idusuario,years,nota,creditos]);
        
        return res.status(200).json(
            `titulo creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}