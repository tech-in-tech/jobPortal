import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { RadioGroup } from '../ui/radio-group'
import { USER_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { Loader2 } from 'lucide-react'
import { setLoading } from '@/redux/authSlice'


const Signup = () => {

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  })
  const { loading } = useSelector(store => store.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const changeEventHandeler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const changeFileHandeler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { 'Content-Type': "multipart/form-data" },
        withCredentials: true,
      })
      if (res.data.success) {
        navigate("/login")
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
  
      // ✅ Check if error.response exists before accessing data.message
      const errorMessage =
        error.response?.data?.message || "Something went wrong! Please try again.";
      toast.error(errorMessage);
    }
    finally{
      dispatch(setLoading(false));
    }
  }

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form className='w-md border border-gray-200 rounded-md p-4 my-10' onSubmit={submitHandler}>
          <h1 className='font-bold mb-5 text-xl '>Signup</h1>
          <div className='my-5'>
            <Label className="pb-2">Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandeler}
              placeholder="John Deo"
            />
          </div>
          <div className='my-5'>
            <Label className="pb-2" >Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandeler}
              placeholder="example@gmail.com"
            />
          </div>
          <div className='my-5'>
            <Label className="pb-2" >Phone Number</Label>
            <Input
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandeler}
              type="text"
              placeholder="1234567890"
            />
          </div>
          <div className='my-5'>
            <Label className="pb-2" >Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandeler}
              placeholder="*******"
            />
          </div>

          <div className='flex items-center justify-between'>
            <RadioGroup className="flex items-center gap-4 my-2">
              <div className='flex items-center space-x-2'>
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === 'student'}
                  onChange={changeEventHandeler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandeler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className='flex items-center gap-10'>
            <Label>Profile img</Label>
            <Input

              accept="image/*"
              type="file"
              onChange={changeFileHandeler}
              className="cursor-pointer w-40 sm:w-48 md:w-56 lg:w-64"
            />
          </div>

          {
            loading ? (<Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin' />please wait</Button>) : (<Button type="submit" className="w-full my-5">Signup</Button>)
          }
          <span className='text-sm'>Already have an account? <Link className='text-blue-600 font-bold' to="/login">Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Signup
