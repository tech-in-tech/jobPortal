import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/redux/jobSlice';

const filterData = [
  {
    filterType: "Location",
    array: ["Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Data Science", "Graphic Designer", "Data Analyst", "DevOps Engineer", "App Developer", "Game Developer", "Ethical Hacker"]
  },
  {
    filterType: "Salary",
    array: ["0-40K", "42K to 1 Lakh", "1 Lakh to 5 Lakh"]
  },
];

const FilterCard = () => {
  const [selectedValue,setSelectedValue] = useState('');

  const dispatch = useDispatch();
  const changeHandler = (value)=>{
    setSelectedValue(value)
  }

  useEffect(()=>{
    // console.log(selectedValue);
    dispatch(setSearchQuery(selectedValue))
  },[selectedValue])
  return (
    <div className="p-3 bg-white shadow-lg rounded-lg border border-gray-200 max-w-sm">
      <h1 className="text-xl font-semibold">Filter Jobs</h1>
      <hr className="mt-3 mb-4 border-gray-300" />

      {/* Scrollable Filter Container */}
      <div className="h-150 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {filterData.map((data, index) => (
          <div key={index} className="mb-4 font-bold text-xl">
            <h2 className="font-medium text-gray-700">{data.filterType}</h2>
            <RadioGroup value = {selectedValue} onValueChange = {changeHandler} className="mt-2 space-y-2">
              {data.array.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <RadioGroupItem id={`radio-${index}-${idx}`} value={item} />
                  <Label htmlFor={`radio-${index}-${idx}`}>{item}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCard;
