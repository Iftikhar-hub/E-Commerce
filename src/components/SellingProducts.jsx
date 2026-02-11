
import view from '../assets/view.svg'
import YelowStar from '../assets/YelowStar.svg'

import heroaPicture from '../assets/heroaPicture.png'

import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { useGetProductDataQuery } from '../services/productApi.js'
import { useEffect, useState } from "react";

import { addToWishlistBackend } from "../services/adToWishlist";
import { toast } from 'react-toastify';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { useGetUserDataQuery } from '../services/userApi.js';
import { useSelector } from 'react-redux';


const SellingProducts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: userData } = useGetUserDataQuery();

    const numberOfIcons = 5;
    const iconsArray = Array.from({ length: numberOfIcons });
     const wishlistItems = useSelector((state) => state.wishlist.items);

    const { data } = useGetProductDataQuery("bestSelling");
    const [displayProducts, setDisplayedProducts] = useState([]);
    useEffect(() => {
        if (data && data.data) {
            setDisplayedProducts(data.data)
        }

    }, [data])

      const handleAddToWishlist = (product) => {
            if (!userData) {
                toast.error( "Please Login to wishlist", {
                    position: 'top-right',
                });
                return;
            }
    
            dispatch(addToWishlistBackend({ product }))
                .unwrap()
                .then(() => toast.success("Added to wishlist! "))
                .catch(() => toast.error("Failed to add"));
    
        };
    return (
        <div className="w-full  overflow-hidden max-w-400 px-6 lg:px-26 xl:px-36  mx-auto">
            <div className=" flex flex-col gap-15 py-20 ">
                <div className=" w-full flex flex-row justify-between items-baseline-last 
                          ">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ amount: 0.1 }}
                        className="flex flex-row items-baseline-last gap-21.75">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-row items-center gap-6">
                                <span className="w-5 h-10 bg-[#DB4444] rounded-sm"></span>
                                <p className="font-poppins text-base text-4 font-semibold leading-5 tracking-normal text-[#DB4444] ">This Month</p>

                            </div>
                            <p className="font-inter text-2xl lg:text-4xl font-semibold whitespace-nowrap leading-12 tracking-[0.04em]
                                    text-[#000000]">Best Selling Products</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ amount: 0.1 }}
                        className=' flex-row gap-2 hidden sm:flex'>
                        <a href='/AllSellingProducts' className='w-39.75 h-14 relative group whitespace-nowrap bg-[#DB4444] py-4 px-12 flex items-center justify-center text-[white] rounded-sm font-poppins font-bold cursor-pointer text-[16px]'>
                            <span className='w-full z-10 text-white relative'>View All</span>
                            <div class="absolute inset-0 bg-[#b82525] w-0 group-hover:w-full  transition-all duration-300 ease-in-out rounded-sm "></div>
                        </a>
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.1 }}
                    className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5  max-w-350 overflow-x-hidden no-scrollbar'>
                    {displayProducts && displayProducts?.slice(0, 4).map((product, index) => (
                        <div key={product._id ?? index} className='w-full  flex flex-col gap-4 '>
                            < div className='w-ful ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex  
                             flex-col justify-center'>
                                <div className='flex flex-row justify-between items-start'>
                                    <div></div>
                                    <div className='flex flex-col gap-2'>
                                        {
                                            userData ? (
                                                wishlistItems.find((item) => item._id === product._id) ? (
                                                    <button onClick={() => handleRemoveWishlist(product)} className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                                        <FaHeart className='text-[20px] text-[#DB4444]' />
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
                                        <button className=' w-8.5 h-8.5 rounded-full  flex items-center justify-center'>
                                            <img src={view} alt="view" className="hidden" />
                                        </button>
                                    </div>
                                </div>
                                <img onClick={() => navigate(`/productDetails/${product._id}`)} src={product.image} alt="product" className='w-43 h-38 mx-auto cursor-pointer' />
                            </div>

                            <div className='w-full ProductDetails flex flex-col gap-2'>
                                <p className='text-[#000000] font-poppins text-[16px] font-medium leading-6 tracking-[0]'>
                                    {product.pname}</p>
                                <p className='text-[#DB4444] font-poppins text-[16px] flex flex-row gap-4 font-medium leading-6 tracking-[0]'>${product.orignalPrice}
                                    <span className='text-[#000000] line-through opacity-50'>
                                        ${product.discountedPrice}</span>
                                </p>
                                <div className="flex flex-row items-center space-x-1">
                                    {iconsArray.map((_, index) => (
                                        <img src={YelowStar} className="h-4 w-4" alt="YelowStar" key={index}>
                                        </img>
                                    ))}
                                    <p className='text-[#000000]'>(88)</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.1 }}
                    className='flex flex-row gap-2  sm:hidden'>
                    <a href='/AllSellingProducts' className='w-full h-14 relative group whitespace-nowrap bg-[#DB4444] py-4 px-12 flex items-center justify-center text-[white] rounded-sm font-poppins font-bold cursor-pointer text-[16px]'>
                        <span className='w-full z-10 text-white relative'>View All</span>
                        <div class="absolute inset-0 bg-[#b82525] w-0 group-hover:w-full  transition-all duration-300 ease-in-out rounded-sm "></div>
                    </a>
                </motion.div>
                <motion.img
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.1 }}
                    src={heroaPicture} alt="heroaPicture" />

            </div>


        </div>

    )
}
export default SellingProducts;