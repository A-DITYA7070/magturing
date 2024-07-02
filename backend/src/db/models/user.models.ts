import mongoose, {Schema} from "mongoose";
import validator from "validator";
import { userInterface } from "../interfaces/user.interface.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";


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
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[6,"Password must be at least 6 characters long"]
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
    refreshToken:{
        type:String
    },
    sessionToken:{
        type:Date
    },
    resetPasswordExpire:String,
    resetPasswordToken:String
},{
    timestamps:true
});


userSchema.pre("save", async function(next){
    if(!this.isModified("password"))return next();
    this.password = await bcrypt.hash(this.password,10)
    next();
});


userSchema.methods.comparepassword = async function (password:string){
    return await bcrypt.compare(password,this.password);
}

const jwtSecert = process.env.JWT_SECRET || "";

userSchema.methods.getjwtToken = function(){
    const date = Date.now();
    this.sessionToken = date;
    return jwt.sign(
    {
        _id:this._id,
        role:"user",
        email:this.email,
        date:date
    },
    jwtSecert,
    { expiresIn:"15d"},
  );
}


userSchema.methods.getResetToken = async function(){
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken=crypto
     .createHash("sha256")
     .update(resetToken)
     .digest("hex");
 
    this.resetPasswordExpire=Date.now()+15*60*1000;
    return resetToken;
 }



export const User = mongoose.model<userInterface>("User",userSchema);

