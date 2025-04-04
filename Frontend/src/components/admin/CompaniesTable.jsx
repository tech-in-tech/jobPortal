import React from 'react'
import { Table, TableCaption, TableCell, TableHeader, TableRow, TableHead, TableBody } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A List of your recent Registered Companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
            </Avatar>

          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>Date</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
              <PopoverTrigger>
                <MoreHorizontal/>
              </PopoverTrigger>
              <PopoverContent className="w-32">
                <div className='flex items-center gap-2 cursor-pointer w-fit'>
                  <Edit2 className='w-4'/>
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable
