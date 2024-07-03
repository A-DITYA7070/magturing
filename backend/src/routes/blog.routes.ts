import express from "express";
import { 
   createBlog,
   getAllBlogs,
   getBlogById,
   deleteBlog
} from "../controllers/blog/blog.controllers.js";


const router = express.Router();

router.route("/blog/create").post(createBlog);
router.route("/blog/").get(getAllBlogs);
router.route("/blog/:id").get(getBlogById).delete(deleteBlog);



export default router;