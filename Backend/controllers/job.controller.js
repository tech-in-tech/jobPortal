import { Job } from "../models/job.model.js";
import { User } from "../models/user.model.js";

// post jobs for admin
export const postJob = async (req, res) => {
  try {
    const userId = req.id;
    const { title, description, requirements, salary, location, jobType, position, experienceLevel, company } = req.body;
    if (!title || !description || !requirements || !salary || !location || !jobType || !position || !experienceLevel || !company) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      })
    };
    console.log(req.body);
    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary,
      experienceLevel,
      location,
      jobType,
      position,
      company,
      created_by: userId
    })
    return res.status(201).json({
      message: "New Job created successfully",
      job,
      success: true
    })
  } catch (error) {
    console.log(error);
  }
}

// get all jobs for student
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ]
    };

    const jobs = await Job.find(query).populate({
      path: "company"
    }).sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false
      })
    };

    return res.status(200).json({
      jobs,
      success: true,
    })
  } catch (error) {
    console.log(error);

  }
}


// get job by id for student
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path:"application"
    });
    if (!job) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false
      })
    }
    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
  }
}

// get all jobs created by admin
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId })
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false
      })
    }
    res.status(200).json({
      jobs,
      success: true
    })
  } catch (error) {
    console.log(error);
  }
}