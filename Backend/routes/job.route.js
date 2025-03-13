import express from "express";
import { Router } from "express";

import isAuthenticated from "../middelwares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = Router();

router.post("/post",isAuthenticated,postJob);
router.get("/get",isAuthenticated,getAllJobs);
router.get("/getAdminJobs",isAuthenticated,getAdminJobs);
router.get("/get/:id",isAuthenticated,getJobById);



export default router;
