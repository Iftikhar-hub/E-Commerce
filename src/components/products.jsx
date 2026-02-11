import Semiclone from '../assets/Semiclone.svg'
import iconsleft from '../assets/iconsleft.svg'
import iconsright from '../assets/iconsright.svg'
import Wishlist from '../assets/Wishlist.svg'
import view from '../assets/view.svg'
import YelowStar from '../assets/YelowStar.svg'

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import { useGetUserDataQuery } from '../services/userApi';
import { useGetProductDataQuery } from '../services/productApi'
import LoginPopup from './LoginPopup';

import { useDispatch } from 'react-redux';

import { motion } from 'framer-motion';
import { addToCartBackend } from "../services/adToCart";
import { addToWishlistBackend } from "../services/adToWishlist";
import { removeFromWishlistBackend } from "../services/adToWishlist";
import { useNavigate } from 'react-router-dom'
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";




const Products = () => {
    const swiperRef = useRef(null);
    const navigate = useNavigate();
    const numberOfIcons = 5;
    const iconsArray = Array.from({ length: numberOfIcons });

    const { data: userData } = useGetUserDataQuery();

    const [showLoginPopup, setShowLoginPopup] = useState(false);


    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        if (!userData) {
            setShowLoginPopup(true);
            return;
        }

        dispatch(addToCartBackend({ product }))
            .unwrap()
            .then(() => toast.success("Added to cart! "))
            .catch(() => toast.error("Failed to add Cart"));

    };

    const handleAddToWishlist = (product) => {
        if (!userData) {
            setShowLoginPopup(true);
            return;
        }

        dispatch(addToWishlistBackend({ product }))
            .unwrap()
            .then(() => toast.success("Added to wishlist! "))
            .catch(() => toast.error("Failed to add"));

    };

    //  const handleRemoveWishlist = (productId) => {
    //      dispatch(removeFromWishlistBackend({ productId }))
    //          .unwrap()
    //          .then(() => toast.success("Item Removed from wishlist"))
    //          .catch(() => toast.error("Failed To Remove")); 
         

    // };
    


    const { data } = useGetProductDataQuery();
    const [displayProducts, setDisplayedProducts] = useState([]);
    useEffect(() => {
        if (data && data.data) {
            setDisplayedProducts(data.data)
        }

    }, [data])

    const cartItems = useSelector((state) => state.cart.items);
    const wishlistItems = useSelector((state) => state.wishlist.items);
    

    // Counter
    const initialTime = 2 * 24 * 60 * 60;
    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timerInterval);
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);


        return () => clearInterval(timerInterval);
    }, []);

    const seconds = timeRemaining % 60;
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const hours = Math.floor((timeRemaining % 86400) / 3600);
    const days = Math.floor(timeRemaining / 86400);

    return (
        <div className="w-full max-w-400 overflow-hidden mx-auto px-6 lg:px-26 xl:px-36 mt-25 flex flex-col items-center gap-10">
            <div className=" w-full max-w-400 flex flex-row justify-between items-baseline-last">
                <div className="max-[380px]:w-full flex flex-row items-baseline-last justify-between gap-6 sm:gap-12 md:gap-21.75">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ amount: 0.1 }}
                        className="flex flex-col gap-6">
                        <div className="flex flex-row items-center gap-6">
                            <span className="w-5 h-10 bg-[#DB4444] rounded-sm"></span>
                            <p className="font-poppins text-base text-4 font-semibold leading-5 tracking-normal
                              text-[#DB4444] ">Today’s</p>

                        </div>
                        <p className="font-inter whitespace-nowrap text-2xl lg:text-4xl font-semibold leading-12 tracking-[0.04em]
                          text-[#000000]">Flash Sales</p>


                    </motion.div>

                    <div className="flex flex-row items-baseline-last gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="font-poppins text-xs font-medium leading-4.5 tracking-normal
                              text-[#000000]">Days</p>
                            <p className="font-inter lg:text-3xl font-bold leading-7.5 tracking-[0.04em]
                               text-[#000000]">{`${days}`}</p>
                        </div>
                        <img src={Semiclone} alt="Semiclone" className="w-1 h-4" />
                        <div className="flex flex-col  gap-1">
                            <p className="font-poppins text-xs font-medium leading-4.5 tracking-normal
                              text-[#000000]">Hours</p>
                            <p className="font-inter lg:text-3xl font-bold leading-7.5 tracking-[0.04em]
                               text-[#000000]">{`${hours}`}</p>
                        </div>
                        <img src={Semiclone} alt="Semiclone" className="w-1 h-4 hidden sm:block" />
                        <div className=" flex-col  gap-1 hidden sm:flex">
                            <p className="font-poppins text-xs font-medium leading-4.5 tracking-normal
                              text-[#000000]">Minutes</p>
                            <p className="font-inter lg:text-3xl font-bold leading-7.5 tracking-[0.04em]
                               text-[#000000]">{`${minutes}`}</p>
                        </div>
                        <img src={Semiclone} alt="Semiclone" className="w-1 h-4 hidden sm:block" />
                        <div className=" flex-col  gap-1 hidden sm:flex">
                            <p className="font-poppins text-xs font-medium leading-4.5 tracking-normal
                              text-[#000000]">Seconds</p>
                            <p className="font-inter lg:text-3xl font-bold leading-7.5 tracking-[0.04em]
                               text-[#000000]">{`${seconds}`}</p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.1 }}
                    className='flex flex-row gap-2 max-[380px]:hidden'>
                    <div onClick={() => { swiperRef.current?.slidePrev() }} className='cursor-pointer lg:w-11.5 lg:h-11.5 flex items-center justify-center rounded-full bg-[#F5F5F5] '>
                        <img src={iconsleft} alt="iconsleft" />
                    </div>
                    <div onClick={() => { swiperRef.current?.slideNext() }} className='cursor-pointer lg:w-11.5 lg:h-11.5 flex items-center justify-center rounded-full bg-[#F5F5F5] '>
                        <img src={iconsright} alt="iconsright" />
                    </div>

                </motion.div>

            </div>



            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.1 }}
                className=' flex flex-row gap-7 w-full '>

                <Swiper modules={[Navigation]} loop={true} spaceBetween={0}
                    slidesPerView={4} allowTouchMove={false}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }

                    }
                    className="mySwiper w-full">
                    {displayProducts && displayProducts?.slice(0, 8).map((product, index) => (
                        <SwiperSlide key={product._id ?? index} className=' flex flex-col gap-4 '>
                            <div className='w-full max-w-67 ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex flex-col    
                          justify-center'>
                                <div className='flex flex-row justify-between items-start'>
                                    <p className='py-1 px-3 rounded-sm bg-[#DB4444] text-[#FAFAFA] text-[12px] font-normal leading-4.5 tracking-0 text-center'>-40%</p>
                                    <div className='flex flex-col gap-2'>
                                        {
                                            userData ? (
                                                wishlistItems.find((item) => item._id === product._id) ? (
                                                    <button  className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                                        <FaHeart className='text-[20px] text-[#DB4444]'/>
                                                    </button>
                                                ) : (
                                                        <button onClick={() => handleAddToWishlist(product)} className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                                            <FaRegHeart className='text-[18px] ' />
                                                        </button>  
                                                )   

                                            ) : 
                                                <button onClick={() => handleAddToWishlist(product)} className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                                    <FaRegHeart className='text-[18px] ' />
                                                </button>
                                        }
                                        <button className=' w-8.5 h-8.5 rounded-full flex items-center justify-center'>
                                            <img src={view} alt="view" className='hidden' />
                                        </button>
                                    </div>
                                </div>

                                <img onClick={() => navigate(`/productDetails/${product._id}`)} src={product.image} alt="icon" className='w-43 h-38 mx-auto cursor-pointer' />

                                {
                                    userData ? (
                                        cartItems.find((item) => item._id === product._id) ? (
                                            <button className='mt-3 font-medium font-poppins cursor-not-allowed px-2 py-2 text-[white] text-center w-full bg-gray-400 rounded-sm ' disabled>Added to Cart</button>
                                        ) : (
                                            <button onClick={() => handleAddToCart(product)} className=' mt-3 font-medium font-poppins cursor-pointer px-2 py-2 text-[white] text-center w-full bg-[#DB4444] rounded-sm'>Add To Cart</button>
                                        )
                                    ) : (
                                        <button onClick={() => handleAddToCart(product)} className='relative group mt-3 font-medium font-poppins cursor-pointer px-2 py-2 text-[white] text-center w-full bg-[#DB4444] rounded-sm'>
                                            <span className='w-full z-10 text-white relative'>Add To Cart</span>
                                            <div class="absolute inset-0 bg-[#b82525] h-0 group-hover:h-full  transition-all duration-300 ease-in-out rounded-sm "></div>
                                        </button>
                                    )
                                }

                            </div>

                            <div className='ProductDetails flex flex-col gap-2'>
                                <p className='text-[#000000] font-poppins text-[16px] font-medium leading-6 tracking-[0]'>{product.pname}</p>
                                <p className='text-[#DB4444] font-poppins text-[16px] flex flex-row gap-4 font-medium leading-6 tracking-[0]'>$ {product.orignalPrice}
                                    <span className='text-[#000000] line-through opacity-50'>
                                        $ {product.discountedPrice}</span>
                                </p>
                                <div className="flex flex-row items-center space-x-1">
                                    {iconsArray.map((_, index) => (
                                        <img src={YelowStar} className="h-4 w-4" alt="YelowStar" key={index}>
                                        </img>
                                    ))}
                                    <p className='text-[#000000]'>(88)</p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}




                </Swiper>
                <LoginPopup
                    show={showLoginPopup}
                    onClose={() => setShowLoginPopup(false)}
                />
            </motion.div>

            <a href='/AllProducts' className='w-58.5 relative group h-14 bg-[#DB4444] py-4 px-12 flex items-center justify-center text-[white] rounded-sm font-poppins font-bold cursor-pointer text-[16px]'>
                <span className='z-10 relative'>View All Products</span>
                <div className="absolute inset-0 bg-[#b82525]   w-0 group-hover:w-full  transition-all duration-300 ease-in-out rounded-sm
                group-hover:scale-103  "></div>
            </a>

        </div>

    )
}

export default Products;