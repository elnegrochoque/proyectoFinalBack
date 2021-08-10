import { Router } from "express";

import respuestasCtrl from "../controllers/respuestas.controllers";
// creo una instancia del router

const router = Router();

//crear las rutas

router.route("/respuestas")
    .post(respuestasCtrl.crearRespuesta);

router.route("/respuestas/:idRespuesta")
    .delete(respuestasCtrl.eliminarRespuesta)
router.route("/respuestas/:idAlumno/:idEvaluacion/:idNumeroPregunta")
    .get(respuestasCtrl.obtenerPreguntasEvaluacion)
export default router;