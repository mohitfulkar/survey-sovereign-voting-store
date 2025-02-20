import express from "express";
import { userlogin, userRegister } from "../controller/authController";
const router = express.Router();

router.post("/create-panelist", userRegister);
router.post("/panelist/login", userlogin);

export default router;
