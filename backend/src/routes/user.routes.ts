import express from "express";
import { 
    getUser,
    register,
    deleteUser,
    updateUser,
    getAllUsers
} from "../controllers/user/user.controllers.js";
import { adminOnly } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.route("/register").post(register);
router.route("/getUser").get(getUser);
router.route("/:id").delete(adminOnly,deleteUser);
router.route("/:id").put(updateUser);
router.route("/all").get(adminOnly,getAllUsers);





export default router;