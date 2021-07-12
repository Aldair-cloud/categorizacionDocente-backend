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
        const response = await pool.query('SELECT  s.nombre,u.nombre as uni, t.idtitulo,t.especialidad,t.horas,t.creditos,t.f_obtencion,t.sunedu,t.archivo,t.years,t.nota FROM TITULO t,subfactor s,universidad u WHERE t.idsubfactor=s.idsubfactor and t.iduniversidad = u.iduniversidad and t.iddocente= $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}


export const createTitulo = async(req, res) => {
    try {
        const { idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,iddocente,years,nota,creditos } = req.body;
        await pool.query('insert into titulo (idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,iddocente,years,nota,creditos) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [idsubfactor,iduniversidad,especialidad,horas,f_obtencion,sunedu,archivo,iddocente,years,nota,creditos]);
        
        return res.status(200).json(
            `titulo creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}
export const updatenota = async(req, res) => {
    try {
        const { idtitulo,nota } = req.body;
        await pool.query('update titulo set nota=$1 where idtitulo=$2',
         [nota,idtitulo]);

        // console.log(nombres, correo, telefono);
        
        return res.status(200).json(
            `grado modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}