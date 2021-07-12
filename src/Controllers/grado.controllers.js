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
        const response = await pool.query('SELECT s.nombre,u.nombre as uni, g.idgrado,g.especialidad,g.horas,g.f_obtencion,g.sunedu,g.archivo,g.years,g.nota FROM GRADO g, subfactor s, universidad u  WHERE g.idsubfactor=s.idsubfactor and g.iduniversidad = u.iduniversidad and g.iddocente= $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

export const createGrado = async(req, res) => {
    try {
        const { idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,iddocente,years,nota } = req.body;
        await pool.query('insert into grado (idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,iddocente,years,nota) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
         [idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,iddocente,years,nota]);

        // console.log(nombres, correo, telefono);
        
        return res.status(200).json(
            `grado creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}


export const updatenota = async(req, res) => {
    try {
        const { idgrado,nota } = req.body;
        await pool.query('update grado set nota=$1 where idgrado=$2',
         [nota,idgrado]);

        // console.log(nombres, correo, telefono);
        
        return res.status(200).json(
            `grado modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}