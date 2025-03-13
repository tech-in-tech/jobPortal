import express from "express";
import { Router } from "express";

import isAuthenticated from "../middelwares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJob, updateStatus } from "../controllers/application.controller.js";


const router = Router();

router.get("/apply/:id",isAuthenticated,applyJob)
router.get("/get",isAuthenticated,getAppliedJob)
router.get("/:id/applicants",isAuthenticated,getApplicants)
router.post("/status/:id/update",isAuthenticated,updateStatus)



export default router;
