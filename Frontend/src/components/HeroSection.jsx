import React from 'react'
import { FaSearch } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 m-10'>
        <span className='px-4 mx-auto py-4 rounded-3xl bg-gray-100 text-[#f83002] font-bold'>No. 1 Job Hunt Website</span>
        <h1 className=' text-5xl font-bold'>Search, Apply &<br /> Build <span className='text-[#f83002]'>Your Future</span></h1>
        <p className='mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, commodi? Aspernatur quos consequuntur illum deleniti?</p>
        {/* input field */}

        <div className='flex items-center justify-center  mt-5'>
        <div className="flex items-center bg-white rounded-full shadow-md p-2 w-full max-w-lg">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="w-full outline-none px-4 py-2 text-gray-700"
          />
          <button className="bg-[#f83002] p-3 rounded-full text-white">
            <FaSearch size={25} />
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}
export default HeroSection
