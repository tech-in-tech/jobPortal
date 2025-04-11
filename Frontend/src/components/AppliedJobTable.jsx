import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'
const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector(store => store.job);

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
            allAppliedJobs.length <= 0 ? <span>You haven't applied any job</span> : allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id} className="hover:bg-gray-50 transition duration-300">
                <TableCell className="p-3">{appliedJob.createdAt.split("T")[0]}</TableCell>
                <TableCell className="p-3 font-medium text-gray-800">{appliedJob.job.title}</TableCell>
                <TableCell className="p-3 text-gray-600">{appliedJob.job.company.name}</TableCell>
                <TableCell className="p-3">
                  <Badge
                    className={`px-3 py-1 font-medium rounded-md border
    ${appliedJob.status === "pending"
                        ? "bg-yellow-200 text-yellow-800 border-yellow-500"
                        : appliedJob.status === "accepted"
                          ? "bg-green-200 text-green-800 border-green-500"
                          : "bg-red-200 text-red-800 border-red-500"
                      }
  `}
                  >
                    {appliedJob.status}
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
