import { Router } from 'express'
const router = Router();

import * as legajo from '../Controllers/legajo.controller'


router.post('/aportes',legajo.crearaportes);
router.get('/getaporte/:id',legajo.getaportes);

router.post('/premios',legajo.crearpremios);
router.get('/getpremio/:id',legajo.getpremios);


router.post('/asesoria',legajo.crearasesorias);
router.get('/getasesoria/:id',legajo.getasesorias);

router.post('/libro',legajo.crearlibros);
router.get('/getlibro/:id',legajo.getlibros);


router.post('/proyeccion',legajo.crearproyeccion);
router.get('/getproyeccion/:id',legajo.getproyeccion);

router.post('/capacitacion',legajo.crearcapacitacion);
router.get('/getcapacitacion/:id',legajo.getcapacitacion);



router.post('/publicacion_inv',legajo.crearpublic_inves);
router.get('/getpublicacion_inv/:id',legajo.getpublic_inves);


router.post('/participacion_inv',legajo.crearparticipacion_inves);
router.get('/getparticipacion_inv/:id',legajo.getparticipacion_inves);


module.exports = router;