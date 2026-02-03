
import React from 'react';
import { useGetUserDataQuery } from '../services/userApi';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const UserProfile = ({ userId }) => {
     const navigate = useNavigate();
     const handleLogout = async () => {
            try {
                await axios.post(
                    'https://e-commerce-backend-production-6436.up.railway.app/api/user/user-logout',
                    {},
                    { withCredentials: true }
                );
    
                localStorage.removeItem('isAuth');
                navigate('/')
                window.location.reload();
    
            } catch (error) {
                console.error("Logout failed", error);
            }
        };
   
    const { data: userData, isLoading, isError, error } = useGetUserDataQuery(userId);

    if (isLoading) {
        return <div>Loading user data...</div>;
    }

    if (isError) {
       
        return <div className='text-red-500'> <p>Failed To Load</p>
            Error: {error.status}</div>;
    }
   

    
    

    if (userData) {
        return (
            
            <div className='text-black flex flex-col gap-4 items-center justify-center'>
                <img src={userData.file} alt="PNG" className='w-15 h-15 rounded-full'/>
                <div className='text-black flex flex-col items-center justify-center'>
                    <p>{userData._id}</p>
                    <h1 className='text-[18px] text-[#FAFAFA] font-bold'>{userData.name}</h1>
                    <p className='text-[15px] text-[#FAFAFA]'>{userData.email}</p>

                </div>
                
                
                <a href="#" onClick={handleLogout} className='group relative overflow-hidden font-bold font-poppins text-[#FAFAFA] text-base w-full py-1 border border-[#FAFAFA] leading-6 tracking-normal text-center rounded-sm hover:border-none'>
                    <span class="relative z-10 group-hover:text-white transition-colors duration-300">
                        Log Out
                    </span>
                    <div class="absolute inset-0 bg-[#b82525] h-0 group-hover:h-full   transition-all duration-300 ease-in-out"></div>
                </a>
                
               
               
            </div>
        );
    }


};

export default UserProfile;
