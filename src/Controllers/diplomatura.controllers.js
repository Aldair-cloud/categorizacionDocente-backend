import { pool } from '../database'


export const readAllDiplomatura= async(req, res) => {
    try {
        const response = await pool.query('select *from especialidad');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}

export const readDiplomatura = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT * FROM especialidad WHERE idusuario= $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}


export const createDiplomatura = async(req, res) => {
    try {
        const { idsubfactor,iduniversidad,especialidad,horas,f_inicio,f_fin,sunedu,archivo,idusuario,creditos,years,nota} = req.body;
        await pool.query('insert into especialidad (idsubfactor,iduniversidad,especialidad,horas,f_inicio,f_fin,sunedu,archivo,idusuario,creditos,years,nota) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [idsubfactor,iduniversidad,especialidad,horas,f_inicio,f_fin,sunedu,archivo,idusuario,creditos,years,nota]);
        
        return res.status(200).json(
            `titulo creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}