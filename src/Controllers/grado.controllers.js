import { pool } from '../database'


export const readAllGrados = async(req, res) => {
    try {
        const response = await pool.query('select *from grado');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}
export const readGrado = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from grado where iddocente=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

export const createGrado = async(req, res) => {
    try {
        const { idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,idusuario,years,nota } = req.body;
        await pool.query('insert into grado (idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,idusuario,years,nota) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,idusuario,years,nota]);

        // console.log(nombres, correo, telefono);
        
        return res.status(200).json(
            `grado creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}