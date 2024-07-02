import express from "express";
import { newBlog } from "../controllers/blog/blog.controllers.js";


const router = express.Router();


router.route("/new").post(newBlog);



export default router;