import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

const Job = () => {
  return (
    <div className="p-12 rounded-lg shadow-2xl bg-white border border-gray-200 space-x-3 hover:shadow-3xl transition duration-300">
      {/* Top Section */}
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <p>📅 2 days ago</p>
        <Button variant="ghost" className="rounded-full" size="icon">
          <Bookmark className="text-gray-600 hover:text-[#f83002]" />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 my-3">
        <Avatar className="w-12 h-12 border border-gray-300">
           <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
        </Avatar>
        <div>
          <h1 className="font-semibold text-lg text-gray-800">Company Name</h1>
          <p className="text-gray-500 text-sm">📍 India</p>
        </div>
      </div>

      {/* Job Title & Description */}
      <div>
        <h1 className="font-bold text-xl text-gray-900 my-2">Software Engineer</h1>
        <p className="text-sm text-gray-600">
          Build and scale innovative software solutions using modern web technologies.
        </p>
      </div>

      {/* Job Details - Badges */}
      <div className="flex items-center gap-4 mt-4">
        <Badge className="text-[#f83002] font-semibold px-3 py-2" variant="outline">📌 12 Positions</Badge>
        <Badge className="text-[#2522d1] font-semibold px-3 py-2" variant="outline">⏳ Part-Time</Badge>
        <Badge className="text-[#ff00aa] font-semibold px-3 py-2" variant="outline">💰 24 LPA</Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-6">
        <Button variant="outline" className="px-6 py-2 text-gray-800 cursor-pointer border-gray-400 hover:bg-gray-100">
          Details
        </Button>
        <Button className="px-6 py-2 cursor-pointer bg-[#f83002] text-white font-bold rounded-lg hover:bg-[#d92d00] transition">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
