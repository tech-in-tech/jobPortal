import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
// import store from '@/redux/store';


const JobDescription = () => {
  const { singleJob } = useSelector(store => store.job);
  const { user } = useSelector(store => store.auth);
  const isInitiallyApplied = singleJob?.application?.some(application => application.applicant === user?._id) || false;

  const [isApplied,setIsApplied]= useState(isInitiallyApplied)

  // const isApplied = true;
  const params = useParams();
  const jobId = params.id
  const dispatch = useDispatch();


  const applyJobHandeler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`,{withCredentials:true})
      if (res.data.success) {
        setIsApplied(true);  //update the local state
        const updateSingleJob = {...singleJob,application:[...singleJob.application,{applicant:user?._id}]}
        dispatch(setSingleJob(updateSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
  }


  useEffect(() => {
    const fetchSingleJobs = async () => {
      try {
        // console.log(typeof jobId, jobId);
        // console.log("jobId from useParams:", jobId);
        // console.log("Params:", params);
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
        // console.log(res.data);
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job))
          setIsApplied(res.data.job.application.some(application=>application.applicant===user?._id))
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchSingleJobs();
  }, [jobId, dispatch, user?._id])

  return (
    <div className='max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200'>
      <div className='flex items-center justify-between pb-6 border-b border-gray-300'>
        <div>
          <h1 className='font-bold text-2xl text-gray-800'>{singleJob?.title}</h1>
          <div className='flex items-center gap-3 mt-3'>
            <Badge className="text-blue-700 font-semibold px-3 py-1 bg-blue-100 rounded-md" variant="ghost">
              {singleJob?.position}
            </Badge>
            <Badge className="text-[#f83002] font-semibold px-3 py-1 bg-red-100 rounded-md" variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-[#7209b7] font-semibold px-3 py-1 bg-purple-100 rounded-md" variant="ghost">
              {singleJob?.salary}
            </Badge>
          </div>
        </div>

        <Button
          onClick={isApplied ? null : applyJobHandeler}
          disabled={isApplied}
          className={`px-5 py-2 text-white font-semibold rounded-lg transition-all duration-300 ${isApplied ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'
            }`}
        >
          {isApplied ? 'Already Applied' : 'Apply Now'}
        </Button>
      </div>

      <h1 className='border-b-2 border-gray-300 font-semibold text-lg py-4 text-gray-700'>
        Job Description
      </h1>

      <div className='flex flex-col gap-3 text-gray-800 mt-4'>
        <h1 className='font-semibold'>
          Role: <span className='pl-4 font-normal text-gray-600'>{singleJob?.title}</span>
        </h1>
        <h1 className='font-semibold'>
          Location: <span className='pl-4 font-normal text-gray-600'>{singleJob?.location}</span>
        </h1>
        <h1 className='font-semibold'>
          Description:
          <span className='pl-4 font-normal text-gray-600'>
            {singleJob?.description}
          </span>
        </h1>
        <h1 className='font-semibold'>
          Experience: <span className='pl-4 font-normal text-gray-600'>{singleJob?.experienceLevel}</span>
        </h1>
        <h1 className='font-semibold'>
          Salary: <span className='pl-4 font-normal text-gray-600'>{singleJob?.salary}</span>
        </h1>
        <h1 className='font-semibold'>
          Total Applicants: <span className='pl-4 font-normal text-gray-600'>{singleJob?.application?.length}</span>
        </h1>
        <h1 className='font-semibold'>
          Posted Date: <span className='pl-4 font-normal text-gray-600'>{singleJob?.createdAt.split("T")[0]}</span>
        </h1>
      </div>
    </div>
  )
}

export default JobDescription
