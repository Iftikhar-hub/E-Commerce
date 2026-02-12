import { useState } from "react";

import { useGetUserDataQuery } from '../services/userApi';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { BASE_URL } from "../utils/data";
import { useEffect } from "react";
import Loader from "../components/Loader";

const ProfileUser = ({ userId }) => {
     const { data: userData, isLoading, isError, error } = useGetUserDataQuery(userId);
        const [userNewInfo, setuserNewInfo] = useState({
            name: "", email: "", address: "", phone: "", currentPassword: "", newPassword: "", confirmNewPassword: ""
        });
        useEffect(() => {
            if (userData) {
                setuserNewInfo({
                    name: userData.name || "",
                    email: userData.email || "",
                    phone: userData.phone || "",
                    address: userData.address || "",
                    currentPassword: "",
                    newPassword: "",
                    confirmNewPassword: ""
                });
            }
        }, [userData]);
    
        if (isLoading) {
            if (isLoading) return <div class="flex mt-70 justify-center items-center">
                <Loader />
            </div>;
        }
    
        if (isError) {
    
            return <div className='text-red-500'> <p>Failed To Load</p>
                Error: {error.status}</div>;
        }
    
    
    
        const handleChangeNewInfo = (e) => {
            setuserNewInfo({ ...userNewInfo, [e.target.name]: e.target.value });
    
        };
       
    
        const handleSubmitNewInfo = async (e) => {
            e.preventDefault();
    
            try {
    
                const res = await axios.put(`${BASE_URL}/api/user/user-update`, userNewInfo,
                    {
                        withCredentials: true,
                      
                    });
                toast.success(res.data.msg, {
                    position: 'top-right',
                    autoClose: 3000,
                });
    
    
            } catch (err) {
                toast.error(err.response?.data?.msg || "Something Wrong, Please try again", {
                    position: 'top-right',
                    autoClose: 3000,
                });
    
            }
        };
        
    return (

        <div className="flex flex-col px-8 py-2 gap-4 shadow-[0px_1px_13px_0px_#0000000D] items-start rounded-lg">
            <p className="text-[#DB4444] text-[20px] leading-7 font-bold">Edit Your Profile</p>
            <form onSubmit={handleSubmitNewInfo} className="flex flex-col gap-8">
                <div className="flex flex-row justify-between gap-12.5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[16px] text-[#000000] leading-6 font-normal font-poppins">Name</label>
                        <input type="text" name="name" id="name" className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} value={userNewInfo.name} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[16px] text-[#000000] leading-6 font-normal font-poppins">Email</label>
                        <input type="text" name="email" id="email" className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} value={userNewInfo.email} />
                    </div>
                </div>

                <div className="flex flex-row justify-between gap-12.5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-[16px] text-[#000000] leading-6 font-normal font-poppins">Phone</label>
                        <input type="numeric" name="phone" id="phone" className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} value={userNewInfo.phone} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="address" className="text-[16px] text-[#000000] leading-6 font-normal font-poppins">Address</label>
                        <input type="text" name="address" id="address" className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} value={userNewInfo.address} />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-[16px] text-[#000000] leading-6  font-poppins font-bold"> Password Change</p>
                    <input type="password" name="currentPassword" id="currentPassword" className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} placeholder="Current Password " value={userNewInfo.currentPassword} />

                    <input type="password" name="newPassword" id="newPassword" className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} placeholder="New Password " value={userNewInfo.newPassword} />

                    <input type="password" name="confirmNewPassword" id="confirmNewPassword" className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} placeholder="Confirm New Password " value={userNewInfo.confirmNewPassword} />

                </div>
                <div className="flex flex-row gap-4 justify-end">
                    <button className="text-[#000000] font-normal font-poppins text-[16px] leading-6">Cancel</button>
                    <button type="submit" className="text-white bg-[#DB4444] py-2 px-8 cursor-pointer rounded-sm 
                                      font-normal font-poppins text-[16px] leading-6">Save changes</button>

                </div>
            </form>


        </div>

    )
}

export default ProfileUser;