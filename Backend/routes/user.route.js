import { Router } from "express";
import { login,logout,register,updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middelwares/isAuthenticated.js";
import { singleUpload } from "../middelwares/multer.js";

const router = Router();

router.post("/register",singleUpload,register)
router.post("/login",login)
router.get("/logout",logout)
router.post("/profile/update",isAuthenticated,singleUpload,updateProfile)



export default router;
