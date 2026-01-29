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
import LoginPopup from './LoginPopup';





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


    return(
        <div className="w-full  max-w-400 mx-auto px-26 pt-10 ">
            {/* <LoginPopup className=''
                show={showLoginPopup}
                onClose={() => setShowLoginPopup(false)}
            /> */}
            <div className="flex flex-row  w-full  justify-between items-center ">
                {userData && (
                    <UserProfile />
                )}
               
               
                <div className="flex flex-row gap-25 items-center justify-center ">
                    
                    <p className="text-[#000000] font-inter text-2xl font-bold leading-6 tracking-[0.03em]
                     ">Exclusive</p>
                    
                    <div className="flex flex-row gap-8 items-center">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className={`text-[#000000] font-poppins text-base font-normal leading-6 tracking-normal text-center
                             ${window.location.pathname === link.href ? "underline underline-offset-5" : ""}`}>
                                {link.name}</a>
       
                        ))}

                        {isAuth ? (
                            <a href="#" onClick={handleLogout} className='text-[#000000] font-poppins text-base font-normal leading-6 tracking-normal text-center'>Log Out</a>
                        ) : (
                            <>
                             <a href="/signup" className='text-[#000000] font-poppins text-base font-normal leading-6 tracking-normal text-center'>Sign Up</a>
                             <a href="/login" className='text-[#000000] font-poppins text-base font-normal leading-6 tracking-normal text-center'>Login</a>
                            </>
                        )}
                        

                    </div>

                </div>

                <div className="flex flex-row gap-6 items-center justify-between">
                    <div className="flex flex-row gap-2.5 bg-[#F5F5F5] py-1.75 pl-5 pr-3 rounded-sm ">
                        <input type="text" placeholder="What are you looking for?" className="opacity-50 font-poppins text-xs font-normal leading-4.5 tracking-normal text-[#000000]" />
                        <img src={searchIcon} alt="searchIcon" className='w-6 h-6 cursor-pointer' />

                    </div>

                    <div className='flex flex-row gap-4'>
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
                    </div>

                </div>
               


            </div>

        </div>
    )
}

export default Navbar;