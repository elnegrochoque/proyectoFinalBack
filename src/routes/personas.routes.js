import { Router } from "express";
import personasCtrl from "../controllers/personas.controllers";
// creo una instancia del router

const router = Router();

//crear las rutas

router.route("/personas")
    .get(personasCtrl.getPrueba)
    .post(personasCtrl.crearPersona);
    
    
export default router;