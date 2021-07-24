import { Router } from "express";
import personasCtrl from "../controllers/personas.controllers";
// creo una instancia del router

const router = Router();

//crear las rutas

router.route("/")
    .get(personasCtrl.getPrueba);
    
    
export default router;