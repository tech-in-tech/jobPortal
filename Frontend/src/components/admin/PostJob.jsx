import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

// const companyArray = [];

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: "",
    companyId: "",
  });


  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();


  const { companies } = useSelector(store => store.company);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const selectChangeHandle = (value)=>{
    const selectedCompany = companies.find((company)=>company.name.toLowerCase()===value);
    setInput({...input,companyId:selectedCompany._id});

  }

  const submitHandeler = async(e)=>{
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`,input,{
        headers:{
          'Content-type':'application/json'
        },
        withCredentials:true
      });
      if(res.data.success){
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className='flex items-center justify-center w-full py-10 px-4'>
        <form onSubmit={submitHandeler} className='w-full max-w-4xl bg-white p-10 border border-gray-200 shadow-xl rounded-3xl'>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">📝 Post a New Job</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            <div>
              <Label className="text-sm text-gray-600">Job Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-600">Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-600">Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-600">Salary</Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-600">Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-600">Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-600">Experience</Label>
              <Input
                type="Number"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm text-gray-600">Total Positions</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="mt-1"
              />
            </div>
            {
              companies.length > 0 && (
                <Select onValueChange={selectChangeHandle}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {
                        companies.map((company) => {
                          return (
                            <SelectItem value={company?.name?.toLowerCase()}>{company.name}</SelectItem>
                          )
                        })
                      }

                    </SelectGroup>

                  </SelectContent>
                </Select>
              )
            }
          </div>
            {
              loading ? (<Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin' />please wait</Button>) : (<Button type="submit" className="w-full my-5">Post New Job</Button>)           
          }
          {
            companies.length === 0 && <p className='text-xs text-red-600 font-bold text-center my-3'>Please Register a Company first before posting a job</p>
          }
        </form>
      </div>
    </div>
  )
}
export default PostJob
