import { Router } from "express";
import evaluacionesCtrl from "../controllers/evaluaciones.controllers";
import resultadosCtrl from "../controllers/resultados.controllers";
// creo una instancia del router

const router = Router();

//crear las rutas

router.route("/resultados")
    .post(resultadosCtrl.crearResultado);
router.route("/resultados/:idResultados")
    .get(resultadosCtrl.obtenerUnResultado)
    .put(resultadosCtrl.editarRresultado)
router.route("/resultados/evaluacion/:idEvaluacion")
.get(resultadosCtrl.obtenerResultadosEvaluacion)
export default router;