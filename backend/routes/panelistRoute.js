import express from "express";
import {
  addPanelist,
  getPanelist,
  getPanelistById,
} from "../controller/panelistController.js";
import { panelistlogin } from "../controller/authController.js";
import upload from "../controller/multerConfig.js";
const router = express.Router();

router.post("/panelist/login", panelistlogin);
router.get("/panelists", getPanelist);
router.get("/panelist/:id", getPanelistById);
router.post("/add-panelist", upload.single("photo"), addPanelist);

export default router;
