import React from 'react'
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow} from './ui/table'
import { Badge } from './ui/badge'
const AppliedJobTable = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      
      <Table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <TableCaption className="text-gray-600 mt-3">A list of your applied jobs</TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow className="text-gray-700">
            <TableHead className="p-3 text-left font-semibold">Date</TableHead>
            <TableHead className="p-3 text-left font-semibold">Job Role</TableHead>
            <TableHead className="p-3 text-left font-semibold">Company</TableHead>
            <TableHead className="p-3 text-left font-semibold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            [1, 2, 3, 4, 5].map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50 transition duration-300">
                <TableCell className="p-3">17-07-2025</TableCell>
                <TableCell className="p-3 font-medium text-gray-800">Frontend</TableCell>
                <TableCell className="p-3 text-gray-600">Google</TableCell>
                <TableCell className="p-3">
                  <Badge className="border  px-3 py-1 font-medium rounded-md">
                    selected
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
