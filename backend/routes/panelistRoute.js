import express from "express";
import {
  createPanelist,
  getPanelist,
  getPanelistById,
} from "../controller/panelistController.js";
import { panelistlogin } from "../controller/authController.js";
const router = express.Router();

router.post("/create-panelist", createPanelist);
router.post("/panelist/login", panelistlogin);
router.get("/panelists", getPanelist);
router.get("/panelist/:id", getPanelistById);

export default router;
