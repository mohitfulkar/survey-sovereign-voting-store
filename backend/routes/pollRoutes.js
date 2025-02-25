import express from "express";
import {
  createPoll,
  deletePollById,
  getPollById,
  getPollItems,
} from "../controller/pollController.js";
const router = express.Router();

router.get("/polls", getPollItems);
router.get("/poll-detail/:id", getPollById);
router.post("/create-poll", createPoll);
router.delete("/delete-poll/:id", deletePollById);

export default router;
