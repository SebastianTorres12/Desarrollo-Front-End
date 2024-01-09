
import express from "express";
import {
  getSolicitudes,
  getSolicitud,
  createSolicitud,
  updateSolicitud,
  deleteSolicitud,
} from "../controllers/SolicitudController.js";

const router = express.Router();

router.route("/").get(getSolicitudes).post(createSolicitud);
router.route("/:id").get(getSolicitud).put(updateSolicitud).delete(deleteSolicitud);

export default router;
