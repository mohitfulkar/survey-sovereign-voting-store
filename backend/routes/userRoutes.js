import express from "express";
import { userlogin, userRegister } from "../controller/authController.js";
const router = express.Router();

router.post("/user/register", userRegister);
router.post("/user/login", userlogin);

export default router;
