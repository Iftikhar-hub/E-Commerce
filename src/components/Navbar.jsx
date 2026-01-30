import searchIcon from '../assets/searchIcon.svg';
import Wishlist from '../assets/Wishlist.svg';
import cart from '../assets/cart.svg';
import UserProfile from './userProfile';
import { useGetUserDataQuery } from '../services/userApi';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";

import {motion} from 'framer-motion';

const Navbar = ({ userId }) => {
    const isAuth = localStorage.getItem('isAuth');
    const { data: userData } = useGetUserDataQuery(undefined, {
        skip: !isAuth
    });
    const cartItems = useSelector((state) => state.cart.items);
    const totalCartItems = cartItems.length; 
    console.log("User Data in Navbar:", userData);



    const navLinks = [
        {name:"Home", href:"/"},
        {name:"Contact", href:"#"},
        {name:"About", href:"#"},
        
    ]
    const navigate = useNavigate();


    const handleTpaddedCart = () => {
        if (!userData) {
            alert("Please login to view your cart");
            return;
        }
        navigate('/Cart');
    };
    const handleLogout = async () => {
        try {
            await axios.post(
                'http://localhost:8000/api/user/user-logout',
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

    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
    const toggleUserProfile = () => {
        setIsUserProfileOpen(!isUserProfileOpen);
    }


    return(
        <div className="w-full  max-w-400 mx-auto px-26 pt-10 ">
          
            <div className="flex flex-row  w-full  justify-between items-center ">
                
                <div className="flex flex-row gap-25 items-center justify-center ">   
                    <p className="text-[#000000] font-inter text-2xl font-bold leading-6 tracking-[0.03em]
                     ">Exclusive</p>
                    
                    <div className="flex flex-row gap-8 items-center">
                        {navLinks.map((link, index) => (
                            <>
                            <a key={index} href={link.href} className={`text-[#000000] font-poppins text-base font-normal leading-6 tracking-normal text-center group relative
                             ${window.location.pathname === link.href ? "" : ""}`}>
                                    {link.name}
                                    <span className={`${window.location.pathname === link.href ? " " : "absolute w-0 h-0.5 left-0 bottom-0  insect-0 group-hover:w-full bg-[#DB4444] transition-all decoration-300 ease-in-out"}`}></span>
                                    <span className={`${window.location.pathname === link.href ? "absolute w-full h-0.5 left-0 bottom-0  insect-0  bg-[#DB4444] " : " "}`}></span>
                                </a>
                            
                            </>
       
                        ))}

                        {isAuth ? (
                            <a href="#"  className='text-[#000000] font-poppins text-base font-normal leading-6 tracking-normal text-center'></a>
                        ) : (
                            <>
                                    <a href="/signup" className='text-[#000000] group relative font-poppins text-base font-normal leading-6 tracking-normal text-center'>Sign Up
                                        <span className='absolute w-0 h-0.5 left-0 bottom-0  insect-0 group-hover:w-full bg-[#DB4444] transition-all decoration-300 ease-in-out'></span>
                                    </a>
                                    
                                    <a href="/login" className='text-[#000000] group relative font-poppins text-base font-normal leading-6 tracking-normal text-center'>Login
                                        <span className='absolute w-0 h-0.5 left-0 bottom-0  insect-0 group-hover:w-full bg-[#DB4444] transition-all decoration-300 ease-in-out'></span>
                                    </a>
                            </>
                        )}
                        

                    </div>

                </div>

                <div className="flex flex-row gap-6 items-center justify-between">
                    <div className="flex flex-row gap-2.5 bg-[#F5F5F5] py-1.75 pl-5 pr-3 rounded-sm ">
                        <input type="text" placeholder="What are you looking for?" className="opacity-50 font-poppins text-xs font-normal leading-4.5 tracking-normal text-[#000000]" />
                        <img src={searchIcon} alt="searchIcon" className='w-6 h-6 cursor-pointer' />

                    </div>

                    <div className='flex flex-row gap-4 place-items-start  '>
                        <a href='/WhishLists' className='cursor-pointer relative'>
                            {isAuth && (

                                <p className='absolute right-0 -top-1 text-[12px] flex items-center justify-center bg-red-800 text-white font-bold rounded-full w-4 h-4 '>2</p>
                            )}
                            <img src={Wishlist} alt="Wishlist" className='w-8 h-8' />
                        </a>
                        <div onClick={handleTpaddedCart} className='cursor-pointer relative'>
                            {isAuth && (
                                
                                <p className='absolute right-0 -top-1 text-[12px] flex items-center justify-center bg-red-800 text-white font-bold rounded-full w-4 h-4 '>{totalCartItems}</p>
                            )}
                            
                            <img src={cart} alt="cart" className='w-8 h-8' />
                        </div>
                        {userData && (
                            <div className='relative'>
                                <div className='w-8 h-8 rounded-full bg-[#DB4444] flex items-center justify-center '>
                                    <FiUser onClick={toggleUserProfile} className=' w-6 h-7 text-white cursor-pointer ' />

                                </div> 
                                {isUserProfileOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 30 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className='p-5 absolute  right-0  top-9 bg-[#DB4444] rounded-sm  z-10'>
                                        <UserProfile />

                                    </motion.div>
                                )}

                            </div>
                           
                            
                        )}
                       
                        
                       
                    </div>

                </div>
               


            </div>

        </div>
    )
}

export default Navbar;