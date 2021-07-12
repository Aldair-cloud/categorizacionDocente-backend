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
       
        const response = await pool.query('SELECT s.nombre,u.nombre as uni, e.idespecialidad,e.especialidad,e.horas,e.creditos,e.f_inicio,e.f_fin,e.sunedu,e.archivo,e.years,e.nota  FROM especialidad e,subfactor s,universidad u WHERE e.idsubfactor=s.idsubfactor and e.iduniversidad = u.iduniversidad and e.iddocente= $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}


export const createDiplomatura = async(req, res) => {
    try {
        const { idsubfactor,iduniversidad,especialidad,horas,f_inicio,f_fin,sunedu,archivo,iddocente,creditos,years,nota} = req.body;
        await pool.query('insert into especialidad (idsubfactor,iduniversidad,especialidad,horas,f_inicio,f_fin,sunedu,archivo,iddocente,creditos,years,nota) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [idsubfactor,iduniversidad,especialidad,horas,f_inicio,f_fin,sunedu,archivo,iddocente,creditos,years,nota]);
        
        return res.status(200).json(
            `titulo creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}
export const updatenota = async(req, res) => {
    try {
        const { idespecialidad,nota } = req.body;
        await pool.query('update especialidad set nota=$1 where idespecialidad=$2',
         [nota,idespecialidad]);

        // console.log(nombres, correo, telefono);
        
        return res.status(200).json(
            `nota modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}