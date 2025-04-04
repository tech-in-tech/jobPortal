import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User2 } from 'lucide-react'
import axios from 'axios'
import { LogOutIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import Jobs from '../Jobs'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
// import store from '@/redux/store'

const Navbar = () => {
  // const user = false;
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));  // Ensure this runs after API call
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Logout failed. Please try again.");
    }
  }
  return (
    // Navbar
    <div className='bg-white'>

      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        {/* left  */}
        <div>
          <h1 className='text-2xl font-bold'>Job<span className='text-[#f83002]'>Portal</span>
          </h1>
        </div>

        {/* right */}
        <div className='flex gap-12 justify-center'>
          <ul className='flex font-medium items-center gap-5'>
            {
              user && user.role === 'recruiter' ? (
                <>
                  <li> <Link to="/admin/companies">Companies</Link> </li>
                  <li> <Link to="/admin/jobs">Jobs</Link></li>
                </>
              ) : (
                <>
                  <li> <Link to="/">Home</Link> </li>
                  <li> <Link to="/Jobs">Jobs</Link></li>
                  <li> <Link to='/Browse'>Browse</Link> </li>
                </>
              )
            }

          </ul>

          {
            !user ? (
              <div className='gap-2 flex items-center'>
                <Link to="/Login">
                  <Button className="bg-black text-white" variant="outline">Login</Button>
                </Link>
                <Link to="/Signup">
                  <Button className="bg-[#f63002]  text-white" variant="outline">signup</Button>
                </Link>


              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.profile?.profilePhoto} />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className=''>
                    <div className='flex space-y-2 gap-2'>
                      <Avatar className="cursor-pointer">
                        <AvatarImage src={user?.profile?.profilePhoto} />
                      </Avatar>
                      <div>
                        <h4 className='font-medium'>{user?.fullname}</h4>
                        <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                      </div>
                    </div>

                    <div className='my-2 flex flex-col text-gray-600'>

                      {
                        user && user.role === 'student' && (
                          <div className='flex w-fit items-center gap-2 cursor-pointer'>
                            <User2 />
                            <Button variant="link">
                              <Link to="/profile">View Profile</Link>
                            </Button>
                          </div>
                        )
                      }



                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <LogOutIcon />
                        <Button variant="link"
                          onClick={logoutHandler}>Logout</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }
        </div>
      </div>
    </div>
  )
}
export default Navbar
