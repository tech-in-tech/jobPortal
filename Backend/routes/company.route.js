import express from "express";
import { Router } from "express";

import isAuthenticated from "../middelwares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { singleUpload } from "../middelwares/multer.js";

const router = express.Router();

router.post("/register",isAuthenticated,registerCompany)
router.get("/get",isAuthenticated,getCompany)
router.get("/get/:id",isAuthenticated,getCompanyById)
router.post("/update/:id",isAuthenticated,singleUpload,updateCompany)



export default router;
