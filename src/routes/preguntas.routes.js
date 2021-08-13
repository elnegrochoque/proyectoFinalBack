import { Router } from "express";

import preguntasCtrl from "../controllers/preguntas.controllers";
// creo una instancia del router

const router = Router();

//crear las rutas

router.route("/preguntas")
    .post(preguntasCtrl.crearPregunta)
    .get(preguntasCtrl.getListaPreguntas);

router.route("/preguntas/:id")
    .get(preguntasCtrl.listarPreguntasEvaluacion)
    .delete(preguntasCtrl.eliminarPregunta)
    .put(preguntasCtrl.editarPregunta)
router.route("/preguntas/respuesta/:id")
    .get(preguntasCtrl.obtenerUnaPregunta);


export default router;