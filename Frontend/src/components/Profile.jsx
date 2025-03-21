import React from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Contact, Mail, Pen } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
const skills = ["HTML", "CSS", "JavaScript", "React", "Node"];
const Profile = () => {
  const isResume = true;
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-10 p-8 shadow-lg">
        {/* Profile Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24 border border-gray-300">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-semibold text-xl text-gray-800">Full Name</h1>
              <p className="text-gray-600 text-sm">Software Developer | MERN Stack</p>
            </div>
          </div>
          <Button className="p-2" variant="outline"><Pen className="w-5 h-5" /></Button>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-3 mb-5 text-gray-700">
          <div className="flex items-center gap-3">
            <Mail className="text-gray-500" />
            <span className="text-sm">anu@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="text-gray-500" />
            <span className="text-sm">73467864</span>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h1 className="text-lg font-semibold text-gray-800 mb-2">Skills</h1>
          {skills.length !== 0 ? (
            <div className="flex flex-wrap gap-2">
              {skills.map((item, index) => (
                <Badge key={index} className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700">
                  {item}
                </Badge>
              ))}
            </div>
          ) : (
            <span className="text-gray-500">NA</span>
          )}
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              href="https://x.com/Anubhav6122004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Resume
            </a>
          ) : (
            <span className="text-gray-500">NA</span>
          )}
        </div>
      </div>
      <div className='max-w-7xl mx-auto bg-white rounded-2xl'>
        <h1 className='font-bold text-lg'>Applied Jobs</h1>
        <AppliedJobTable />
      </div>
    </div>
  );
};

export default Profile;
