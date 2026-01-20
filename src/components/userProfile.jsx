
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

    if (userData ) {
        console.log(userData.name)
        return (
            
            <div className='text-black'>
                <h1>Welcome, {userData.name}!</h1>
                <p>Email: {userData.email}</p>
                <p>Joined: {new Date(userData.joinDate).toLocaleDateString()}</p>
            </div>
        );
    }

    return (
        <p className='text-black text-[24px]'>Login Page</p>
    );
};

export default UserProfile;
