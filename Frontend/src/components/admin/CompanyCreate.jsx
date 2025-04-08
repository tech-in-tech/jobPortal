import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';

const CompanyCreate = () => {
  const [companyName, setCompanyName] = useState(""); // ✅ Fixed default state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      if (!companyName.trim()) {
        toast.error("Company name is required");
        return;
      }

      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName: companyName.trim() }, // ✅ Ensure proper formatting
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );

      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        navigate(`/admin/companies/${res?.data?.company?._id}`);
      }
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">What would you like to give your company name?</p>
        </div>

        <Label className="mb-2">Company Name</Label>
        <Input
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName} // ✅ Bind state properly
          type="text"
          className="my-2"
          placeholder="Microsoft"
        />

        <div className="flex items-center gap-2 my-10">
          <Button onClick={() => navigate("/admin/companies")} variant="outline" className="bg-white text-black font-bold hover:bg-red-600 hover:text-white">
            Cancel {/* ✅ Fixed typo */}
          </Button>
          <Button onClick={registerNewCompany} variant="outline" className="bg-white text-black font-bold hover:bg-black hover:text-white">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
