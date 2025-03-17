import React from 'react'
import { Badge } from "../components/ui/badge"
const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border-gray-300 cursor-pointer'>
      <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2.2'>Job Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='flex items-center gap-3 mt-4'>
        <Badge className="text-[#f83002] font-bold " variant="ghost">12 Position</Badge>
        <Badge className="text-[#2522d1] font-bold " variant="ghost">Part Time</Badge>
        <Badge className="text-[#ff00aa] font-bold" variant="ghost">24LPA</Badge>
      </div>
    </div>
  )
}

export default LatestJobCards
