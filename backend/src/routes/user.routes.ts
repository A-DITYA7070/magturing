import express from "express";
import { getUser, getUsers, register } from "../controllers/user/user.controllers.js";


const router = express.Router();


router.route("/new").post(register);
router.route("/all").get(getUsers);
router.route("/:id").get(getUser);


export default router;