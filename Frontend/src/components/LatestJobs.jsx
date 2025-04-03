import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  const { allJobs } = useSelector(store => store.job);

  return (
    <div className='max-w-7xl mx-auto my-20 px-4'>
      <h1 className='text-4xl font-bold'>
        <span className='text-[#f83002]'>Latest & Top</span> Job Openings
      </h1>

      {/* Job cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
        {
          allJobs.length <= 0 ?<span>No Job Avalable</span>: allJobs.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job}  />  // ✅ Fixed key issue
          ))
        }
      </div>
    </div>
  );
};

export default LatestJobs;
