import { Request,Response,NextFunction } from "express"
import userServices from "../../services/user.services.js";
import { myCache } from "../../app.js";

/**
 * Controller function to register a user 
 */
const register = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const {
            _id,
            name,
            email,
            image,
            gender,
            dob
        } = req.body;
    
        if(!_id || !name || !email || !image || !gender || !dob){
            return res.status(400)
            .json({
                success:false,
                message:"Enter all the fields"
            })
        }
    
        const user = await userServices.createUser({
            _id,name,email,gender,image,dob,role:"user"
        })
        
        res.status(200)
        .json({
            success:true,
            user
        })
    }catch(err){
        res.status(500)
        .json({
            success:true,
            message:"Internal server error"
        });
    }
}

/**
 * Controller function to get all users 
 */
const getUsers = async(req:Request,res:Response,next:NextFunction) => {
    try{

        let users;
        if(myCache.has("users")){
            users = JSON.parse(myCache.get("users") as string);
        }else{
            users = await userServices.getAllUsers();
            myCache.set("users",JSON.stringify(users));
        }
        
        res.status(200)
        .json({
            success:true,
            users
        });

    }catch(err){
        res.status(500)
        .json({
            success:false,
            message:err
        })
    }
}

/**
 * Controller function to get user
 */
const getUser = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const id = req.params.id;
        let user;
        if(myCache.has(`user-${id}`)){
            user = JSON.parse(myCache.get(`user-${id}`) as string);
        }else{
            user = await userServices.getUser(id);
            myCache.set(`user-${id}`,JSON.stringify(user));
        }
        res.status(200)
        .json({
            success:true,
            user
        })

    }catch(err){
        res.status(500)
        .json({
            success:false,
            message:"Internal server error"
        })
    }
}


export {
    register,
    getUsers,
    getUser
}