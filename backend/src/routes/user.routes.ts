import express from "express";
import { 
    getUser,
    register,
    deleteUser,
    updateUser,
    getAllUsers
} from "../controllers/user/user.controllers.js";


const router = express.Router();

router.route("/register").post(register);
router.route("/getUser").get(getUser);




export default router;