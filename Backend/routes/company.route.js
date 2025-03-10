import express from "express";
import { Router } from "express";

import isAuthenticated from "../middelwares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";

const router = Router();

router.post("/register",isAuthenticated,registerCompany)
router.post("/get",isAuthenticated,getCompany)
router.get("/get/:id",isAuthenticated,getCompanyById)
router.post("/update/:id",isAuthenticated,isAuthenticated,updateCompany)



export default router;
