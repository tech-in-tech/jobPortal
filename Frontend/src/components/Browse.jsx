import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector(store => store.job);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""))
    }
  }, [])
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto my-20'>
        <h1>Search Result({allJobs.length})</h1>
        <div className='grid grid-cols-2 gap-10'>
          {
            allJobs.map((job) => {
              return (
                <Job key={job._id} job={job} />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Browse
