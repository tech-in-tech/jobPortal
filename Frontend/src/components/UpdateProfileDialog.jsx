import React, { useState } from 'react'
import axios from 'axios'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(store => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map(skill => skill),
    file: user?.profile.resume
  })

  const changeEventHandeler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const dispatch = useDispatch();
  const fileChangeHandeler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  }

  const submitHandeler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      
      setLoading(true);
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      })
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
    finally {
      setLoading(false);
    }
    setOpen(false);
    console.log(input)
  }

  return (
    <div>
      <Dialog open={open}>
        <DialogContent className="sm:mx-w-[425px]" onInteractOutside={() => setOpen(false)}>
          <DialogHeader>Update Profile</DialogHeader>
          <form onSubmit={submitHandeler}>
            <div className='grid gap-4 py-7'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="name" className="text-right">Name</Label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={input.fullname}
                  onChange={changeEventHandeler}
                  className='col-span-3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />

              </div>




              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="email" className="text-right">Email</Label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  onChange={changeEventHandeler}
                  value={input.email}
                  className='col-span-3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
              </div>




              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="number" className="text-right">Number</Label>
                <input
                  id='number'
                  name='number'
                  type='number'
                  onChange={changeEventHandeler}
                  value={input.phoneNumber}
                  className='col-span-3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
              </div>




              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="bio" className="text-right">Bio</Label>
                <input
                  id='bio'
                  name='bio'
                  onChange={changeEventHandeler}
                  value={input.bio}

                  className='col-span-3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
              </div>




              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="skills" className="text-right">Skills</Label>
                <input
                  id='skills'
                  name='skills'
                  onChange={changeEventHandeler}
                  value={input.skills}
                  className='col-span-3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
              </div>




              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="file" className="text-right">Resume</Label>
                <input
                  id='file'
                  name='file'
                  type='file'
                  accept='application/pdf'
                  // value= {input.file}
                  onChange={fileChangeHandeler}
                  className='col-span-3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
              </div>
            </div>
            <DialogFooter>
              {
                loading ? (<Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin' />please wait</Button>) : (<Button type="submit" className="w-full my-5">Update</Button>)
              }
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default UpdateProfileDialog



