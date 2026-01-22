
import React from 'react';
import { useGetUserDataQuery } from '../services/userApi';
const UserProfile = ({ userId }) => {
   
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
            
            <div className='text-black flex flex-row gap-4 items-center'>
                <img src={userData.file} alt="PNG" className='w-15 h-15 rounded-full'/>
                <div className='text-black flex flex-col items-start'>
                    <h1 className='text-[18px] font-bold'>{userData.name}</h1>
                    <p className='text-[15px] '>{userData.email}</p>

                </div>
               
               
            </div>
        );
    }


};

export default UserProfile;
