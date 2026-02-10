import iconsleft from '../assets/iconsleft.svg'
import iconsright from '../assets/iconsright.svg'
import Wishlist from '../assets/Wishlist.svg'
import view from '../assets/view.svg'
import YelowStar from '../assets/YelowStar.svg'

import { upperitems } from '../utils/data.js'
import { motion } from 'framer-motion'
import { useGetProductDataQuery } from '../services/productApi.js'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
    const navigate = useNavigate();
    const numberOfIcons = 5;
    const iconsArray = Array.from({ length: numberOfIcons });
    const { data } = useGetProductDataQuery("ourProducts");
        const [displayProducts, setDisplayedProducts] = useState([]);
        useEffect(() => {
            if (data && data.data) {
                setDisplayedProducts(data.data)
            }
    
        }, [data])
    return (
        <div className="w-full max-w-400 overflow-hidden px-6 lg:px-26 xl:px-36  mx-auto ">
            <div className=" flex flex-col items-center gap-15 py-2 ">
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
                                <p className="font-poppins text-base text-4 font-semibold leading-5 tracking-normal text-[#DB4444] ">Our Products</p>

                            </div>
                            <p className="font-inter whitespace-nowrap text-2xl lg:text-4xl font-semibold leading-12 tracking-[0.04em] text-[#000000]">Explore Our Products</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.1 }}
                    className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5 place-content-between place-items-center w-full max-w-350 overflow-x-hidden'>
                    {displayProducts && displayProducts?.map((product, index) => (
                        <div key={product._id ?? index} className='w-full  flex flex-col gap-4 '>
                            < div className='w-full ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex  
                                             flex-col justify-center'>
                                <div className=' flex flex-row justify-between items-start'>
                                    <div></div>
                                    <div className='flex flex-col gap-2'>
                                        <button className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                            <img src={Wishlist} alt="Wishlist" />
                                        </button>
                                        <button className=' w-8.5 h-8.5 rounded-full flex items-center justify-center'>
                                            <img src={view} alt="view" className="hidden"/>
                                        </button>
                                    </div>
                                </div>
                                <img onClick={() => navigate(`/productDetails/${product._id}`)} src={product.image} alt="product" className='w-43 cursor-pointer h-38 mx-auto' />
                            </div>

                            <div className='w-full ProductDetails flex flex-col gap-2'>
                                <p className='text-[#000000] font-poppins text-[16px] font-medium leading-6 tracking-[0]'>{product.pname}</p>
                                <p className='text-[#DB4444] font-poppins text-[16px] flex flex-row gap-4 font-medium leading-6 tracking-[0]'>${product.orignalPrice}
                                    <span className='line-through text-gray-500'>${product.discountedPrice}</span>
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
                <motion.button
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.1 }}
                    className='w-58.5 max-[425px]:w-full h-14 relative group bg-[#DB4444] py-4 px-12 flex items-center justify-center text-[white] rounded-sm font-poppins font-bold cursor-pointer text-[16px]'>
                    <span className='w-full z-10 text-white relative'>View All Products</span>
                    <div className="absolute inset-0 bg-[#b82525] h-0  group-hover:h-full   transition-all duration-300 ease-in-out rounded-sm "></div>
                </motion.button>
            </div>
        </div>
    )
}

export default OurProducts;