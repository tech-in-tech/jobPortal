import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Contact, Mail, Pen } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';
// const skills = ["HTML", "CSS", "JavaScript", "React", "Node"];
const Profile = () => {
  useGetAppliedJobs();
  const {user} = useSelector(store=>store.auth);
  const [open, setOpen] = useState(false);
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
              <h1 className="font-semibold text-xl text-gray-800">{user?.fullname}</h1>
              <p className="text-gray-600 text-sm">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={()=>setOpen(true)} className="p-2" variant="outline"><Pen className="w-5 h-5" /></Button>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-3 mb-5 text-gray-700">
          <div className="flex items-center gap-3">
            <Mail className="text-gray-500" />
            <span className="text-sm">{user?.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="text-gray-500" />
            <span className="text-sm">{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h1 className="text-lg font-semibold text-gray-800 mb-2">Skills</h1>
          {user?.profile?.skills.length !== 0 ? (
            <div className="flex flex-wrap gap-2">
              {user?.profile?.skills.map((item, index) => (
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
            target="_blank"
              href={user?.profile?.resume}
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user?.profile?.resumeOriginalName}
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
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Profile;
