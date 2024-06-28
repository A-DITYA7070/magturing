import { Request,Response } from "express"
import userServices from "../../services/user.services.js";


const register = async(req:Request,res:Response) => {
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
            return res.status(200)
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


export {
    register
}