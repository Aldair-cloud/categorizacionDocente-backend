
import { pool } from '../database'
export const crearaportes= async(req,res)=>{
    const {aporte} =req.body
  
   try {
       console.log(aporte)
     const respuesta = await pool.query('insert into aportes(institucion,idsubfactor,foto,iddocente,pais,detalle,fecha) values($1,$2,$3,$4,$5,$6,$7)',[aporte.institucion,aporte.idsubfactor,aporte.foto,aporte.iddocente,aporte.pais,aporte.detalle,aporte.fecha]) 
     return res.status(200).json('Aporte/Logro insertado correctamente');
   } catch (e) {
    console.log(e)

    return res.status(500).json('Error Interno....!');
   }  
}

export const getaportes = async(req,res)=>{
    const iddocente = req.params.id
      try {
          const response = await pool.query('select a.institucion,a.foto,a.pais,a.detalle,a.fecha,s.nombre from aportes a, subfactor s where a.idsubfactor=s.idsubfactor and  a.iddocente = $1',[iddocente]);
          return res.status(200).json(response.rows);
      } catch (e) {
         console.log(e)
          return res.status(500).json('Error Interno....!');
      }
    }




//Crear premio
export const crearpremios= async(req,res)=>{
    const {premio} =req.body
    
   try {


    const respuesta = await pool.query('insert into premios(institucion,idsubfactor,foto,iddocente,pais,detalle,fecha) values($1,$2,$3,$4,$5,$6,$7)',[premio.institucion,premio.idsubfactor,premio.foto,premio.iddocente,premio.pais,premio.detalle,premio.fecha]) 
    console.log(respuesta)
      
     return res.status(200).json('Premio insertado correctamente');
   } catch (e) {
    console.log(e)

    return res.status(500).json('Error Interno....!');
   }  
}




    export const getpremios = async(req,res)=>{
        const iddocente = req.params.id
          try {
              const response = await pool.query('select p.institucion,p.foto,p.pais,p.detalle,p.fecha,s.nombre from premios p, subfactor s where p.idsubfactor=s.idsubfactor and  p.iddocente = $1',[iddocente]);
              return res.status(200).json(response.rows);
          } catch (e) {
             console.log(e)
              return res.status(500).json('Error Interno....!');
          }
        }




        ////ASESORIAS

export const crearasesorias= async(req,res)=>{
    const {asesoria} =req.body
   
   try {
    const respuesta = await pool.query('insert into asesorias(ano,nivel,titulo,autor,especialidad,resolucion,foto,iddocente,idsubfactor) values($1,$2,$3,$4,$5,$6,$7,$8,$9)',[asesoria.ano,asesoria.nivel,asesoria.titulo,asesoria.autor,asesoria.especialidad,asesoria.resolucion,asesoria.foto,asesoria.iddocente,asesoria.idsubfactor]) 
    
    
     return res.status(200).json('Asesoria/Dictamen insertado correctamente');
   } catch (e) {
    console.log(error)

    return res.status(500).json('Error Interno....!');
   }  
}

export const getasesorias = async(req,res)=>{
    const iddocente = req.params.id
      try {
          const response = await pool.query('select a.ano,a.titulo,a.autor,a.especialidad,a.resolucion,a.foto,s.nombre,a.nivel from asesorias a,subfactor s where a.idsubfactor=s.idsubfactor and  a.iddocente = $1',[iddocente]);
          return res.status(200).json(response.rows);
      } catch (e) {
         console.log(e)
          return res.status(500).json('Error Interno....!');
      }
    }


////LIBROS Y OTROS


export const crearlibros= async(req,res)=>{
    const {libros} =req.body
   
   try {
      const respuesta =await pool.query('insert into libros(ano,titulo,idsubfactor,rol,editorial,foto,iddocente) values($1,$2,$3,$4,$5,$6,$7)',[libros.ano,libros.titulo,libros.idsubfactor,libros.rol,libros.editorial,libros.foto,libros.iddocente]) 
    
  
     return res.status(200).json('Libro/otros insertado correctamente');
   } catch (e) {
    console.log(error)

    return res.status(500).json('Error Interno....!');
   }  
}

export const getlibros= async(req,res)=>{
    const iddocente = req.params.id
      try {
        
          const response = await pool.query('select l.ano,l.titulo,l.rol,l.editorial,l.foto,s.nombre from libros l, subfactor s where l.idsubfactor=s.idsubfactor and  l.iddocente = $1',[iddocente]);
          return res.status(200).json(response.rows);
      } catch (e) {
         console.log(e)
          return res.status(500).json('Error Interno....!');
      }
    }


///Proyeccion social


export const crearproyeccion= async(req,res)=>{
    const {proyeccion} =req.body
   
   try {
      const respuesta =await pool.query('insert into proyeccion_social(iddocente,idsubfactor,nombreeven,fecha,foto) values($1,$2,$3,$4,$5)',[proyeccion.iddocente,proyeccion.idsubfactor,proyeccion.nombreeven,proyeccion.fecha,proyeccion.foto]) 
    
  
     return res.status(200).json('Proyeccion insertado correctamente');
   } catch (e) {
    console.log(error)

    return res.status(500).json('Error Interno....!');
   }  
}

export const getproyeccion= async(req,res)=>{
    const iddocente = req.params.id
      try {
       
          const response = await pool.query('select p.nombreeven,p.fecha,p.foto,s.nombre from proyeccion_social p, subfactor s where p.idsubfactor=s.idsubfactor and  p.iddocente = $1',[iddocente]);
          return res.status(200).json(response.rows);
      } catch (e) {
         console.log(e)
          return res.status(500).json('Error Interno....!');
      }
    }





    
///Capacitaciones


export const crearcapacitacion= async(req,res)=>{
    const {capacitacion} =req.body
   
   try {
      const respuesta =await pool.query('insert into capacitacion_prof(iddocente,idsubfactor,titulo,organizadora,horas,creditos,lugar,f_inicio,f_fin,foto) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
      [ capacitacion.iddocente,capacitacion.idsubfactor,capacitacion.titulo,capacitacion.organizadora,capacitacion.horas,capacitacion.creditos,capacitacion.lugar,capacitacion.f_inicio,capacitacion.f_fin,capacitacion.foto]) 
    
  
     return res.status(200).json('Proyeccion insertado correctamente');
   } catch (e) {
    console.log(e)

    return res.status(500).json('Error Interno....!');
   }  
}

export const getcapacitacion= async(req,res)=>{
    const iddocente = req.params.id
      try {
          const response = await pool.query('select c.titulo,c.organizadora,c.horas,c.creditos,c.lugar,c.foto,c.f_inicio,c.f_fin, s.nombre from  capacitacion_prof c, subfactor s where c.idsubfactor=s.idsubfactor and  c.iddocente = $1',[iddocente]);
          return res.status(200).json(response.rows);
      } catch (e) {
         console.log(e)
          return res.status(500).json('Error Interno....!');
      }
    }



///Participaciones en Investigaciones


export const crearparticipacion_inves= async(req,res)=>{
  const {p_investigaciones} =req.body
 
 try {
    const respuesta =await pool.query('insert into participacion_investigacion(iddocente,idsubfactor,ano,titulo,linea_invest,rol,f_inicio,foto) values($1,$2,$3,$4,$5,$6,$7,$8)',
    [ p_investigaciones.iddocente,p_investigaciones.idsubfactor,p_investigaciones.ano,p_investigaciones.titulo,p_investigaciones.linea_invest,p_investigaciones.rol,p_investigaciones.f_inicio ,p_investigaciones.foto]) 
  

   return res.status(200).json('Proyeccion insertado correctamente');
 } catch (e) {
  console.log(e)

  return res.status(500).json('Error Interno....!');
 }  
}

export const getparticipacion_inves= async(req,res)=>{
  const iddocente = req.params.id
    try {
      
        const response = await pool.query('select s.nombre,p.ano,p.titulo,p.linea_invest,p.rol,p.f_inicio,p.foto from Participacion_Investigacion p,subfactor s where p.idsubfactor=s.idsubfactor and  p.iddocente = $1',[iddocente]);
        return res.status(200).json(response.rows);
    } catch (e) {
       console.log(e)
        return res.status(500).json('Error Interno....!');
    }
  }


  

///Publicaciones en Investigaciones


export const crearpublic_inves= async(req,res)=>{
  const {publicacion_inv} =req.body
 
 try {
    const respuesta =await pool.query('insert into publicaciones_investigacion(iddocente,idsubfactor,ano,titulo,pais,url,paginas,foto) values($1,$2,$3,$4,$5,$6,$7,$8)',
    [ publicacion_inv.iddocente,publicacion_inv.idsubfactor,publicacion_inv.ano,publicacion_inv.titulo,publicacion_inv.pais,publicacion_inv.url,publicacion_inv.paginas,publicacion_inv.foto]) 
  

   return res.status(200).json('Proyeccion insertado correctamente');
 } catch (e) {
  console.log(e)

  return res.status(500).json('Error Interno....!');
 }  
}


export const getpublic_inves= async(req,res)=>{
  const iddocente = req.params.id
    try {
        const response = await pool.query('select s.nombre,p.ano,p.titulo,p.pais,p.url,p.paginas,p.foto from publicaciones_investigacion p,subfactor s where p.idsubfactor=s.idsubfactor and  p.iddocente = $1',[iddocente]);
        return res.status(200).json(response.rows);
    } catch (e) {
       console.log(e)
        return res.status(500).json('Error Interno....!');
    }
  }



