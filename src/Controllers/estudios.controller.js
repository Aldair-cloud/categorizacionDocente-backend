import { pool } from '../database'


export const readAllestudios = async(req, res) => {
    try {
        const response = await pool.query('select *from estudios');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}
export const readEstudios = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT s.nombre,u.nombre as uni, g.idestudios,g.especialidad,g.horas,g.f_inicio, g.f_fin ,g.sunedu, g.archivo, g.years, g.nota, g.horas FROM estudios g, subfactor s, universidad u  WHERE g.idsubfactor=s.idsubfactor and g.iduniversidad = u.iduniversidad and g.iddocente= $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

export const createEstudios = async(req, res) => {
    try {
        const { idsubfactor,iduniversidad,especialidad,f_inicio,f_fin,sunedu,archivo,iddocente,years,nota,horas } = req.body;
        await pool.query('insert into estudios (idsubfactor,iduniversidad,especialidad,f_inicio,f_fin,sunedu,archivo,iddocente,years,nota,horas) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
         [idsubfactor,iduniversidad,especialidad,f_inicio,f_fin,sunedu,archivo,iddocente,years,nota,horas]);

        // console.log(nombres, correo, telefono);
        
        return res.status(200).json(
            `grado creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}


// export const updatenota = async(req, res) => {
//     try {
//         const { idgrado,nota } = req.body;
//         await pool.query('update grado set nota=$1 where idgrado=$2',
//          [nota,idgrado]);

//         // console.log(nombres, correo, telefono);
        
//         return res.status(200).json(
//             `grado modificado correctamente...!`);
//     } catch (e) {
//         console.log(e);
//         return res.status(500).json(e);
//     }
// }