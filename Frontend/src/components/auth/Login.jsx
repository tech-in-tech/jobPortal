// import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { RadioGroup } from '../ui/radio-group'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { USER_API_END_POINT } from '@/utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",

  })
  const { loading,user } = useSelector(store => store.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeEventHandeler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        header: {
          "content-type": "application/json"
        },
        withCredentials: true
      })
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/")
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
    finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(()=>{
    if(user){
      navigate("/")
    }
  })

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form className='w-md border border-gray-200 rounded-md p-4 my-10' onSubmit={submitHandler}>
          <h1 className='font-bold mb-5 text-xl '>Login</h1>
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
          {
            loading ? (<Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin' />please wait</Button>) : (<Button type="submit" className="w-full my-5">Login</Button>)
          }
          
          <span className='text-sm'>Don't have an account? <Link className='text-blue-600 font-bold' to="/Signup">Signup</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login
