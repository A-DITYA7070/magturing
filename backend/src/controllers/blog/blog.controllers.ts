import { Request, Response, NextFunction } from "express";
import { Blog } from "../../db/models/blog.model.js";
import { NewBlogRequestBody } from "../../types/blog.types.js";
import { catchAsyncError } from "../../middlewares/error.middleware.js";
import ErrorHandler from "../../utils/utility-class.js";

/**
 * Controller function to create blog
 */

const createBlog = catchAsyncError(
  async (
    req: Request<{},{},NewBlogRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { title, name, description, content, image, date, creator } = req.body;

    if (!title || !name || !description || !content || !image || creator) {
      return next(new ErrorHandler("Bad request", 400));
    }

    const blog = await Blog.create({
      title,
      name,
      description,
      content,
      image,
      date,
      creator,
    });

    res.status(201).json({
      success: true,
      blog,
    });
  }
);

/**
 * Controller function to get all blogs
 */
const getAllBlogs = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const blogs = await Blog.find();
    res.status(200).json({
      success: true,
      blogs,
    });
  }
);

/**
 * Controller function to get blog by id
 */

const getBlogById = catchAsyncError(
  async (req: Request, res: Response, nest: NextFunction) => {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Bad request",
      });
    }
    if (!blog) {
      return res.status(404).json({
        success: true,
        message: `blog not found`,
      });
    }
    res.status(200).json({
      success: true,
      blog,
    });
  }
);

/**
 * Delete Blog [accessLevel delete only who has created]
 */
const deleteBlog = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
	const userId = req.body.userId;
    const blog = await Blog.findById(id);

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Bad request",
      });
    }

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: `Blog not found`,
      });
    }

    if (blog.creator.toString() !== userId) {
      return res.status(401).json({
        success: false,
        message: "You are not allowed to delete this blog",
      });
    }

    await blog.deleteOne();
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  }
);

export {createBlog, getAllBlogs, getBlogById,deleteBlog}