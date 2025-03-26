import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className='max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200'>
      <div className='flex items-center justify-between pb-6 border-b border-gray-300'>
        <div>
          <h1 className='font-bold text-2xl text-gray-800'>Frontend Developer</h1>
          <div className='flex items-center gap-3 mt-3'>
            <Badge className="text-blue-700 font-semibold px-3 py-1 bg-blue-100 rounded-md" variant="ghost">
              12 Positions
            </Badge>
            <Badge className="text-[#f83002] font-semibold px-3 py-1 bg-red-100 rounded-md" variant="ghost">
              Part Time
            </Badge>
            <Badge className="text-[#7209b7] font-semibold px-3 py-1 bg-purple-100 rounded-md" variant="ghost">
              24 LPA
            </Badge>
          </div>
        </div>

        <Button
          disabled={isApplied}
          className={`px-5 py-2 text-white font-semibold rounded-lg transition-all duration-300 ${
            isApplied ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'
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
          Role: <span className='pl-4 font-normal text-gray-600'>FullStack Developer</span>
        </h1>
        <h1 className='font-semibold'>
          Location: <span className='pl-4 font-normal text-gray-600'>Hyderabad</span>
        </h1>
        <h1 className='font-semibold'>
          Description:
          <span className='pl-4 font-normal text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </h1>
        <h1 className='font-semibold'>
          Experience: <span className='pl-4 font-normal text-gray-600'>1 Year</span>
        </h1>
        <h1 className='font-semibold'>
          Salary: <span className='pl-4 font-normal text-gray-600'>45 LPA</span>
        </h1>
        <h1 className='font-semibold'>
          Total Applicants: <span className='pl-4 font-normal text-gray-600'>0</span>
        </h1>
        <h1 className='font-semibold'>
          Posted Date: <span className='pl-4 font-normal text-gray-600'>2024-06-14</span>
        </h1>
      </div>6
    </div>
  )
}

export default JobDescription
