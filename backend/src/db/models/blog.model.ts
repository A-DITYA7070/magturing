import mongoose,{Schema} from "mongoose";
import { blogInterface } from "../interfaces/blog.interface.js";

const blogSchema = new Schema({
    title:{
        type:String,
        required:[true,"Please enter the title of the blog"]
    },
    name:{
        type:String,
        required:[true,"Name of the blog is required"],
        minLength:[3,"Name must be atleast 3 characters long"]
    },
    description:{
        type:String,
        required:[true,"Description of the blog is required"],
        minLength:[10,"Description must be 10 chars long"]
    },
    content:{
        type:String,
        required:[true,"Content of the blog is required"],
        minLength:[20,"Content must be atleast 20 chars long"],
        maxLength:[10000,"Content must not exceed 10000 characters"]
    },
    image:{
        type:String,
        required:[true,"Image of the blog is required"]
    },
    date:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
});


export const Blog = mongoose.model<blogInterface>("Blog",blogSchema);