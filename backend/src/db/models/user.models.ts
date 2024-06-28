import mongoose, {Schema} from "mongoose";
import validator from "validator";
import { userInterface } from "../interfaces/user.interface.js";


const userSchema = new Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email "],
        unique:[true,"Email already exists "],
        validate:validator.default.isEmail
    },
    image:{
        type:String,
        required:[true,"Please add photo"]
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:[true,"Please enter gender"]
    },
    dob:{
        type:Date,
        required:[true,"Please enter dob"]
    }
},{
    timestamps:true
});

export const User = mongoose.model<userInterface>("User",userSchema);

