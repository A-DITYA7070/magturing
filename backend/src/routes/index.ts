import userRoutes from "./user.routes.js";
import express from "express";
import blogRoutes from "./blog.routes.js";

const router = express.Router();

router.use("/user",userRoutes);
router.use("/blog",blogRoutes);



export default router;