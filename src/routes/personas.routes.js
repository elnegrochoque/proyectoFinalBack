import { Router } from "express";
import personasCtrl from "../controllers/personas.controllers";
// creo una instancia del router

const router = Router();

//crear las rutas

router.route("/personas")
    .get(personasCtrl.getListaPersonas)
    .post(personasCtrl.crearPersona);
router.route("/personas/:id")
    .delete(personasCtrl.eliminarPersona)
    .get(personasCtrl.obtenerPersona)
    .put(personasCtrl.editarPersona);
export default router;