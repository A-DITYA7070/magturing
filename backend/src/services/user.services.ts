import { User } from "../db/models/user.models.js";
import { NewUserRequestBody } from "../types/user.types.js";

/**
 * User service to create new user.
 * @param user 
 * @returns 
 */
async function createUser(user:NewUserRequestBody){
    return User.create(user);
}

/**
 * User service to get all users from the db
 */
async function getAllUsers(){
    return User.find({});
}

/**
 * User service to get user with id
 */
async function getUser(id:string){
    return User.findById(id);
}




export default{
    createUser,
    getAllUsers,
    getUser
}