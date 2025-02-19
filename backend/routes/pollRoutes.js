import express from "express";
import { getPollById, getPollItems } from "../controller/pollController.js";
const router = express.Router();

router.get("/polls", getPollItems);
router.get("/poll-detail/:id", getPollById);

export default router;
