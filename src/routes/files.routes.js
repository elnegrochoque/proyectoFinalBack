import { Router } from "express";
import filesCtrl from "../controllers/files.controllers.js";


const router = Router();

router.route("/file").post(filesCtrl.postFile);
router.route("/file/:id").get(filesCtrl.getfiles).put(filesCtrl.putfiles);

export default router;
