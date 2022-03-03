import { Router } from "express";
import catedraCtrl from "../controllers/catedra.controllers";
const router = Router();

router
  .route("/catedra")
  .post(catedraCtrl.postCrearCatedra)
  .get(catedraCtrl.getListarCatedras);
router.route("/catedra/:id").get(catedraCtrl.getObtenerCatedra);
export default router;
