import { Router } from "express";
import evaluacionesCtrl from "../controllers/evaluaciones.controllers";

// creo una instancia del router

const router = Router();

//crear las rutas

router.route("/evaluaciones")
    .get(evaluacionesCtrl.listarEvaluaciones)
    .post(evaluacionesCtrl.crearEvaluacion);
    
router.route("/evaluaciones/:id")
.get(evaluacionesCtrl.obtenerEvaluacion)
.delete(evaluacionesCtrl.eliminarEvaluacion)
.put(evaluacionesCtrl.editarEvaluacion)
router.route("/evaluaciones/profesor/:id")
.get(evaluacionesCtrl.listarEvaluacionesProfesor)
router.route("/evaluaciones/alumno/:id")
.get(evaluacionesCtrl.obtenerEvaluacionAlumno);
router.route("/evaluaciones/alumno/preguntas/:id")
.get(evaluacionesCtrl.obtenerEvaluacionPreguntasAlumno)
export default router;