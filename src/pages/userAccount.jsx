import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useGetUserDataQuery } from '../services/userApi';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { BASE_URL } from "../utils/data";



const Account = ({ userId }) => {


    const { data: userData, isLoading, isError, error } = useGetUserDataQuery(userId);
    const [userNewInfo, setuserNewInfo] = useState({
        name: "", email: "", address: "", phone: "", currentPassword: "",  newPassword: "", confirmNewPassword: ""
    });
    
        if (isLoading) {
            return <div>Loading user data...</div>;
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
                const formData = new FormData();
                formData.append("name", userNewInfo.name);
                formData.append("email", userNewInfo.email);
                formData.append("address", userNewInfo.address);
                formData.append("phone", userNewInfo.phone);
                formData.append("currentPassword", userNewInfo.currentPassword);
                formData.append("newPassword", userNewInfo.newPassword);
                formData.append("confirmNewPassword", userNewInfo.confirmNewPassword);
                 
                //   formData.append("file", registerForm.file);
                const res = await axios.put(`${BASE_URL}/api/user/user-update`, formData,
                    {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
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
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar />
            <div className="flex-1">
                <div className=" w-full max-w-400 px-6 lg:px-26 xl:px-36 flex flex-col gap-20 items-end justify-center mx-auto mt-20">
                    <p className="font-poppins font-regular text-[14px] leading-5.25 text-[#DB4444] font-bold"> <span className="text-[#000000]">Wellcome</span> {userData.name}</p>

                    <div className="w-full flex flex-row gap-4 justify-between">
                        <div className="flex flex-col items-start gap-6">
                            <a className="font-poppins font-regular text-[14px] leading-5.25 text-[#000000] cursor-pointer font-bold">Manage Profile</a>
                            <a className="font-poppins font-regular text-[14px] leading-5.25 text-[#000000] cursor-pointer font-bold">My Cart</a>
                            <a className="font-poppins font-regular text-[14px] leading-5.25 text-[#000000] cursor-pointer font-bold">My Wishlist</a>

                        </div>

                        <div className="flex flex-col px-8 py-2 gap-4 shadow-[0px_1px_13px_0px_#0000000D] items-start rounded-lg">
                            <p className="text-[#DB4444] text-[20px] leading-7 font-bold">Edit Your Profile</p>
                            <form onSubmit={handleSubmitNewInfo} encType="multipart/form-data" className="flex flex-col gap-8">
                                <div className="flex flex-row justify-between gap-12.5">
                                    <div className="flex flex-col gap-2"> 
                                        <label htmlFor="name" className="text-[16px] text-[#000000] leading-6 font-normal font-poppins">Name</label>
                                        <input type="text" name="name" id="name" placeholder={userData.name } className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} value={userNewInfo.name} />
                                    </div>
                                    <div className="flex flex-col gap-2"> 
                                        <label htmlFor="email" className="text-[16px] text-[#000000] leading-6 font-normal font-poppins">Email</label>
                                        <input type="text" name="email" id="email" placeholder={userData.email} className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} value={userNewInfo.email} />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between gap-12.5">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="text-[16px] text-[#000000] leading-6 font-normal font-poppins">Phone</label>
                                        <input type="numeric" name="phone" id="phone" placeholder={userData.phone ?? "Phone Number"} className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} value={userNewInfo.phone} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="address" className="text-[16px] text-[#000000] leading-6 font-normal font-poppins">Address</label>
                                        <input type="text" name="address" id="address" placeholder={userData.address ?? "address"} className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} value={userNewInfo.address} />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-[16px] text-[#000000] leading-6  font-poppins font-bold"> Password Change</p>
                                    <input type="password" name="currentPassword" id="currentPassword" placeholder="Current Password" className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} value={userNewInfo.currentPassword} />

                                    <input type="password" name="newPassword" id="newPassword" placeholder="New Password" className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} value={userNewInfo.newPassword} />

                                    <input type="password" name="confirmNewPassword" id="confirmNewPassword" placeholder="Confirm New Password" className="bg-[#F5F5F5] pl-3 text-[16px] text-[#000000] leading-6 font-normal font-poppins outline-0 rounded-sm py-2" onChange={handleChangeNewInfo} value={userNewInfo.confirmNewPassword} />
                                    
                                </div>
                                <div className="flex flex-row gap-4 justify-end">
                                    <button className="text-[#000000] font-normal font-poppins text-[16px] leading-6">Cancel</button>
                                    <button type="submit" className="text-white bg-[#DB4444] py-2 px-8 cursor-pointer rounded-sm 
                                      font-normal font-poppins text-[16px] leading-6">Save changes</button>

                                </div>
                            </form>


                        </div>

                    </div>

                </div>

            </div>

            

            <Footer className="mt-auto" />
        </div>
        
    )
}

export default Account;