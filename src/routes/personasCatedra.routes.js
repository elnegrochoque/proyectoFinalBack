import { Router } from "express";
import personasCatedraCtrl from "../controllers/personasCatedra.controllers";
const router = Router();

router
  .route("/personascatedra")
  .post(personasCatedraCtrl.postAgregarPersonasCatedra)
  .get(personasCatedraCtrl.getListarPersonas);
router
  .route("/personascatedra/:id")
  .get(personasCatedraCtrl.getObtenerPersonaCatedra)
  .put(personasCatedraCtrl.putEditarPersonaCatedra)
  .delete(personasCatedraCtrl.deleteEliminarPersonaCatedra);
export default router;
