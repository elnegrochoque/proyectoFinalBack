import { Router } from "express";
import evaluacionesCtrl from "../controllers/evaluaciones.controllers";

// creo una instancia del router

const router = Router();

//crear las rutas

router.route("/evaluaciones")
    .get(evaluacionesCtrl.getPrueba)
    .post(evaluacionesCtrl.crearEvaluacion);
    
    
export default router;