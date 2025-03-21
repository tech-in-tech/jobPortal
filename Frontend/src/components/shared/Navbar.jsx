import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User2 } from 'lucide-react'
import { LogOutIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Jobs from '../Jobs'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useSelector } from 'react-redux'

const Navbar = () => {
  // const user = false;
  const {user} = useSelector(store=>store.auth);
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
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Jobs">Jobs</Link></li>
            <li> <Link to='/Browse'>Browse</Link> </li>
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
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className=''>
                    <div className='flex space-y-2 gap-2'>
                      <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <div>
                        <h4 className='font-medium'>Anubhav Sharma</h4>
                        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>

                    <div className='my-2 flex flex-col text-gray-600'>
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <User2 />
                        <Button variant="link"><Link to="/profile">
                        View Profile</Link></Button>
                      </div>
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <LogOutIcon />
                        <Button variant="link">Logout</Button>
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
