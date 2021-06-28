import { pool } from '../database'
var nodemailer = require('nodemailer');

export const listarpais = async(req, res) => {
    try {
        const response = await pool.query('select * from pais');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}
export const crearpersona=async(req,res)=>{
    try {
       const  {nombres,apellidos,telefono,correo,dni,sexo,direccion,idpais,foto}=req.body;
        const response = await   pool.query('insert into persona(nombres,apellidos,telefono,correo,dni,sexo,direccion,idpais,foto,estado) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [nombres,apellidos,telefono,correo,dni,sexo,direccion,idpais,foto,'ES']);
        return res.status(200).json(
            `La persona  ${ nombres } ha sido creada correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}
export const obtenerpersonas= async(req,res)=>{
     const  estado  = req.params.estado
    try {
        const response = await pool.query('select * from persona where estado = $1', [estado]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}

export const enviarcorreo=async(req,res)=>{
    const {mensaje} = req.body;
    var mailOptions = {
        from: 'mariollori@upeu.edu.pe',
        to: 'mariollori@upeu.edu.pe',
        subject: 'Credenciales para acceder al sistema.',
        text: mensaje
      };
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mariollori@upeu.edu.pe',
          pass: 'dfuqnyqfqxefkyqn'
        }
      });
    try {
        transporter.sendMail(mailOptions);
        return res.status(200).json("Exito al enviar el correo");
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
  
 
 



  }

  export const obtenerusers = async(req,res)=>{

    try {
        const response = await pool.query('select user from usuario ');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
 
 
 
}

export const obtenercat = async(req,res)=>{

    try {
        const response = await pool.query('select idcategoria,nombre from categoria ');

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
 
 
 
}

export const crearuser=async(req,res)=>{
    const {usuario,docente} = req.body;

    try {
        const resdoc = await  pool.query('insert into docente(idcategoria,idpersona,estadocontrato,estado,estadocat) values($1,$2,$3,$4,$5)   RETURNING iddocente',[docente.idcategoria,docente.idpersona,docente.estadocontrato,true,docente.estadocat])
        console.log(resdoc.rows[0].iddocente)
        if(resdoc.rows[0].length!=0){
          const resuser =  pool.query('insert into usuario(usuario,password,iddocente) values($1,$2,$3)',[usuario.user,usuario.password,resdoc.rows[0].iddocente]);
          
          const mensaje = `Felicidades, su solicitud ha sido aceptada.
          Estas son las credenciales asignadas para que pueda acceder al sistema.
          Usuario: ${usuario.user} 
          Contraseña: ${usuario.password}`
          enviarmensaje(mensaje)
          
        }
        
        return res.status(200).json(`Usuario ${usuario.user} registrado correctamente.`);
        
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }

}
function enviarmensaje(mensaje) {
    var result;
    var mailOptions = {
        from: 'mariollori@upeu.edu.pe',
        to: 'mariollori@upeu.edu.pe',
        subject: 'Credenciales para acceder al sistema.',
        text: mensaje
      };
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mariollori@upeu.edu.pe',
          pass: 'dfuqnyqfqxefkyqn'
        }
      });
    try {
        transporter.sendMail(mailOptions);
        result= "Exito al enviar el correo";
    } catch (e) {
        console.log(e);
         result = 'Error Interno....!';
    }
    return result;
  }
