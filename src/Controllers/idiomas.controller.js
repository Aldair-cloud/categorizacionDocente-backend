import { pool } from '../database'


export const readAllIdiomas = async(req, res) => {
    try {
        const response = await pool.query('select *from idiomas');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}
export const readIdiomas = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT s.nombre,u.nombre as uni, g.ididiomas,g.especialidad,g.unidad,g.f_obtencion, g.nivel, g.archivo FROM idiomas g, subfactor s, universidad u  WHERE g.idsubfactor=s.idsubfactor and g.iduniversidad = u.iduniversidad and g.iddocente= $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

export const createIdiomas = async(req, res) => {
    try {
        const { idsubfactor,iduniversidad,especialidad,unidad,f_obtencion,nivel,iddocente,nota,archivo } = req.body;
        await pool.query('insert into idiomas (idsubfactor,iduniversidad,especialidad,unidad,f_obtencion,nivel,iddocente,nota, archivo) values($1,$2,$3,$4,$5,$6,$7,$8,$9)',
         [idsubfactor,iduniversidad,especialidad,unidad,f_obtencion,nivel,iddocente,nota,archivo]);

        // console.log(nombres, correo, telefono);
        
        return res.status(200).json(
            `grado creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}