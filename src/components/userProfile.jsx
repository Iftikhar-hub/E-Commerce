
import React from 'react';
import { useGetUserDataQuery } from '../services/userApi';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import { useDispatch } from 'react-redux';
import { BASE_URL } from '../utils/data';
const UserProfile = ({ userId }) => {

    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await axios.post(
                `${BASE_URL}/api/user/user-logout`,
                {},
                { withCredentials: true }
            );

            localStorage.removeItem(userId);

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

    const firstLetter = userData.name.charAt(0).toUpperCase();




    if (userData) {
        return (

            <div className='text-black flex  flex-col gap-4 items-center justify-center'>
                {/* <img src={userData.file} alt={firstLetter} className='w-15 h-15 rounded-full' /> */}
                <div className='w-20 h-20 flex items-center justify-center shadow-[0px_1px_13px_0px_#ffff] rounded-full'>

                    <p className='text-red-800 text-[26px] font-bold font-poppins leading-3'>{firstLetter}</p>
                </div>
                <div className='text-black flex flex-col items-center justify-center'>
                    <p>{userData._id}</p>
                    <h1 className='text-[18px] text-black font-bold'>{userData.name}</h1>
                    <p className='text-[15px] text-black'>{userData.email}</p>


                </div>



                <a href="#" onClick={handleLogout} className=' overflow-hidden font-bold font-poppins text-black text-base w-full py-1 border border-black leading-6 tracking-normal text-center rounded-sm '>
                    Log Out
                </a>
                <Link to="/Account" className=' whitespace-nowrap overflow-hidden font-bold font-poppins text-black text-base w-full  rounded-sm '>
                    Manage Account
                </Link>



            </div>

        );
    }


};

export default UserProfile;
