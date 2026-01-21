import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPopup = ({ show, onClose }) => {
    const navigate = useNavigate();

    if (!show) return null; 

    return (
        <div className='absolute top-240 inset-0 bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-[#DB4444] p-6 rounded-lg shadow-lg flex flex-col items-center w-80'>
                <p className='mb-4 text-center text-lg font-medium text-white'>
                    Please sign in to continue
                </p>

                <button
                    onClick={() => navigate('/login')}
                    className='bg-[#4e4e4e] text-white text-[16px] font-bold px-4 py-2 rounded w-full mb-2 cursor-pointer'
                >
                    Login
                </button>

                <button
                    onClick={onClose}
                    className='text-white text-[16px] font-bold cursor-pointer'
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default LoginPopup;
