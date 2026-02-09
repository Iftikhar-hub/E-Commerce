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
import { FiUser, } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';




import { motion, AnimatePresence } from 'framer-motion';
import { BASE_URL } from '../utils/data';

const Navbar = ({ userId }) => {
    const isAuth = localStorage.getItem('isAuth');
    const { data: userData } = useGetUserDataQuery(undefined, {
        skip: !isAuth
    });
    const cartItems = useSelector((state) => state.cart.items);
    const totalCartItems = cartItems.length;
    console.log("User Data in Navbar:", userData);



    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Contact", href: "/Contact" },
        { name: "About", href: "#" },

    ]
    const navigate = useNavigate();


    const handleTpaddedCart = () => {
        if (!userData) {
             toast.error("Please Login To View Your Cart", {
                            position: 'top-right',
                        });
            return;
        }
        navigate('/Cart');
    };
    const handleLogout = async () => {
        try {
            await axios.post(
                `${BASE_URL}/api/user/user-logout`,
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

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const CategoryLinks = [
        { name: "Electronics", href: "#" },
        { name: "Electronics", href: "#" },
        { name: "Home & Lifestyle", href: "#" },
        { name: "Medicine", href: "#" },
        { name: "Sports & Outdoor", href: "#" },
        { name: "Baby’s & Toys", href: "#" },
        { name: "Groceries & Pets", href: "#" },
        { name: "Health & Beauty", href: "#" },
    ]

    const [iscategoryOpen, setIsCategoryOpen] = useState(false);
    const toggleCategory = () => {
        setIsCategoryOpen(!iscategoryOpen);
    }


    return (
        <div className="w-full  max-w-400  mx-auto px-6 lg:px-26 pt-10 ">

            <div className="flex flex-row sm:relative w-full  justify-between items-center ">

                <div className="flex flex-row gap-9  xl:gap-25 items-center justify-center ">
                    <p className="text-[#000000] font-inter text-2xl font-bold leading-6 tracking-[0.03em]
                     ">Exclusive</p>

                    <div className="flex flex-row gap-7 xl:gap-8 items-center">
                        {navLinks.map((link, index) => (
                            <>
                                <a key={index} href={link.href} className={`text-[#000000] hidden sm:block  font-poppins text-base font-normal leading-6 tracking-normal text-center group relative
                             ${window.location.pathname === link.href ? "" : ""}`}>
                                    {link.name}
                                    <span className={`${window.location.pathname === link.href ? " " : "absolute w-0 h-0.5 left-0 bottom-0  insect-0 group-hover:w-full bg-[#DB4444] transition-all decoration-300 ease-in-out"}`}></span>
                                    <span className={`${window.location.pathname === link.href ? "absolute w-full h-0.5 left-0 bottom-0  insect-0  bg-[#DB4444] " : " "}`}></span>
                                </a>

                            </>

                        ))}

                        {isAuth ? (
                            <a href="#" className='text-[#000000] font-poppins text-base font-normal leading-6 tracking-normal text-center'></a>
                        ) : (
                            <>
                                    <a href="/signup" className='text-[#000000] max-[435px]:hidden group relative font-poppins text-base font-normal leading-6 tracking-normal text-center'>Sign Up
                                        <span className="absolute w-0 h-0.5 left-0 bottom-0  insect-0 group-hover:w-full bg-[#DB4444] transition-all decoration-300 ease-in-out"></span>
                                        <span className={`${window.location.pathname === "/signup" ? "absolute w-full h-0.5 left-0 bottom-0  insect-0  bg-[#DB4444] " : " "}`}></span>
                                </a>

                                <a href="/login" className='text-[#000000] max-[435px]:hidden group relative font-poppins text-base font-normal leading-6 tracking-normal text-center'>Login
                                        <span className='absolute w-0 h-0.5 left-0 bottom-0  insect-0 group-hover:w-full bg-[#DB4444] transition-all decoration-300 ease-in-out'></span>
                                        <span className={`${window.location.pathname === "/login" ? "absolute w-full h-0.5 left-0 bottom-0  insect-0  bg-[#DB4444] " : " "}`}></span>
                                </a>
                            </>
                        )}


                    </div>

                </div>

                <div className="flex flex-row gap-6 items-center justify-between">
                    <div className="flex max-[862px]:hidden flex-row gap-2.5 bg-[#F5F5F5] py-1.75 pl-5 pr-3 rounded-sm ">
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

                        <div onClick={toggleMenu} className='pt-3 sm:hidden flex flex-col gap-1 w-4 items-center justify-center  
                          cursor-pointer'>
                            <span className={`bg-[#DB4444] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ?
                                'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                            <span className={`bg-[#DB4444] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ?
                                'hidden' : '-translate-y-0.5'}`}></span>
                            <span className={`bg-[#DB4444] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ?
                                '-rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
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
                                        className='p-5 absolute  right-0  top-9 bg-[#e9e9e9] rounded-sm  z-10'>
                                        <UserProfile />

                                    </motion.div>
                                )}

                            </div>


                        )}

                        



                    </div>

                </div>




            </div>
            <AnimatePresence>
                {isOpen && (

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className='w-full py-3 px-6 bg-black absolute max-[416px]:top-36 sm:hidden top-32 left-0 z-20 flex flex-col gap-3 items-start justify-center'>
                        {navLinks.map((link, index) => (
                            <>
                                <a key={index} href={link.href} className={`text-[#ffffff] font-poppins text-[14px] font-normal leading-6 tracking-normal text-center group relative
                             ${window.location.pathname === link.href ? "" : ""}`}>
                                    {link.name}
                                    <span className={`${window.location.pathname === link.href ? " " : "absolute w-0 h-0.5 left-0 bottom-0  insect-0 group-hover:w-full  transition-all decoration-300 ease-in-out"}`}></span>
                                    <span className={`${window.location.pathname === link.href ? "absolute w-full h-0.5 left-0 bottom-0  insect-0   " : " "}`}></span>
                                </a>
                            </>

                        ))}

                        <div className='w-full flex flex-col gap-3 items-start justify-center'>
                            <p onClick={toggleCategory} className='text-[#ffffff] flex flex-row items-center gap-2 font-poppins text-[14px] font-normal leading-6 tracking-normal text-center'>Category
                                {iscategoryOpen ? (
                                    <MdArrowDropDown className='w-6 h-6' />
                                ) : (
                                    <MdArrowDropDown className='w-6 h-6 rotate-180' />
                                )}
                                

                            </p>
                            <AnimatePresence>
                                {iscategoryOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className='w-full flex flex-col gap-2 items-start justify-center pl-4 border-l border-white'>
                                         {CategoryLinks.map((link, index) => (
                                 <a key={index} href={link.href} className="text-[#ffffff] font-poppins text-[14px] font-normal leading-6 tracking-normal text-center">
                                    {link.name}</a>))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                           
                        </div>

                        <div className='w-full flex flex-row items-center justify-between gap-5'>
                            {isAuth ? (
                                <a href="#"></a>
                            ) : (
                                <>
                                    <a href="/signup" className='w-full py-3 rounded-sm text-[#ffffff] hidden max-[435px]:block group relative font-poppins text-base font-bold leading-6 tracking-normal text-center  bg-[#DB4444]'>Sign Up
                                    </a>

                                    <a href="/login" className='w-full py-3 rounded-sm font-bold text-[#ffffff] hidden max-[435px]:block group relative font-poppins text-base  leading-6 tracking-normal text-center  bg-[#DB4444]'>Login
                                    </a>
                                </>

                            )}


                        </div>
                        

                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mt-5  flex-row justify-between gap-2.5 bg-[#F5F5F5] py-4 pl-5 pr-3 rounded-sm hidden max-[862px]:flex">
                <input type="text" placeholder="What are you looking for?" className="opacity-50 font-poppins text-xs font-normal leading-4.5 tracking-normal text-[#000000] w-full outline-0" />
                <img src={searchIcon} alt="searchIcon" className='w-6 h-6 cursor-pointer' />

            </div>

        </div>
    )
}

export default Navbar;