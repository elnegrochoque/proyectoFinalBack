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
router.route("/evaluaciones/profesor/:id")
.get(evaluacionesCtrl.listarEvaluacionesProfesor)
export default router;