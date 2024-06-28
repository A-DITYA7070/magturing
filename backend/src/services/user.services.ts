import { User } from "../db/models/user.models.js";
import { NewUserRequestBody } from "../types/user.types.js";


async function createUser(user:NewUserRequestBody){
    return User.create(user);
}




export default{
    createUser
}