import {Request,Response,NextFunction } from "express";
import blogServices from "../../services/blog.services.js";

/**
 * Controller function to create new Blog
 */
const newBlog = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const {
            title,
            description,
            content,
            image,
            date,
            name
        } = req.body;

        if(!title || !description || !content || !image || !date || !name){
            return res.status(400)
            .json({
                success:false,
                message:"Bad request"
            })
        }
        const blog = await blogServices.createNewBlog({
            title,
            name,
            description,
            content,
            image,
            date
        });

        res.status(201)
        .json({
            success:true,
            blog
        });

    }catch(err){
        res.status(500)
        .json({
            success:false,
            message:"Internal server error"
        })
    }
}


const getBlogs = async(req:Request,res:Response,next:NextFunction) => {
    try{
        let blogs;
        

    }catch(err){
        res.status(500)
        .json({
            success:false,
            message:"Internal server error"
        })
    }
}


export {
    newBlog
}