import express from "express";
import { register } from "../controllers/user/user.controllers.js";


const router = express.Router();


router.route("/new").post(register);




export default router;