import express from "express";
import {
  createPoll,
  deletePollById,
  getPollById,
  getPollItems,
  updateStatus,
  getPollCount,
} from "../controller/pollController.js";
const router = express.Router();

router.get("/polls", getPollItems);
router.get("/poll-detail/:id", getPollById);
router.get("/poll-count", getPollCount);
router.post("/create-poll", createPoll);
router.put("/poll/status/:id", updateStatus);
router.delete("/delete-poll/:id", deletePollById);

export default router;
