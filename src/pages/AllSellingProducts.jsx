import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import Wishlist from '../assets/Wishlist.svg'
import view from '../assets/view.svg'
import YelowStar from '../assets/YelowStar.svg'

import { sellingItems } from '../utils/data'
import { upperitems } from '../utils/data.js'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";

const AllSellingProducts = () => {

    const navigate = useNavigate();

    const numberOfIcons = 5;
    const iconsArray = Array.from({ length: numberOfIcons });

    return (
        <div className="flex flex-col">
            <Header />
            <Navbar />
             <div className="w-full overflow-hidden max-w-400 px-6 lg:px-26 xl:px-36  mx-auto">
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
            
                            </div>
            
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ amount: 0.1 }}
                                className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5  max-w-350 overflow-x-hidden no-scrollbar'>
                                {sellingItems.map((sellingIcon, index) => (
                                    <div key={index} className='w-full  flex flex-col gap-4 '>
                                        < div className='w-ful ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex  
                                         flex-col justify-center'>
                                            <div className='flex flex-row justify-between items-start'>
                                                <div></div>
                                                <div className='flex flex-col gap-2'>
                                                    <button className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                                        <img src={Wishlist} alt="Wishlist" />
                                                    </button>
                                                    <button className=' w-8.5 h-8.5 rounded-full bg-white flex items-center justify-center'>
                                                        <img src={view} alt="view" />
                                                    </button>
                                                </div>
                                            </div>
                                            <img onClick={() => navigate(`/productDetails/${sellingIcon.id}`)} src={sellingIcon.sellingImage} alt="sellingIcon" className='w-43 h-38 mx-auto cursor-pointer' />
                                        </div>
            
                                        <div className='w-full ProductDetails flex flex-col gap-2'>
                                            <p className='text-[#000000] font-poppins text-[16px] font-medium leading-6 tracking-[0]'>{sellingIcon.sellingName}</p>
                                            <p className='text-[#DB4444] font-poppins text-[16px] flex flex-row gap-4 font-medium leading-6 tracking-[0]'>{sellingIcon.sellingPrice}
                                                <span className='text-[#000000] line-through opacity-50'>
                                                    {sellingIcon.sellingDiscounted}</span>
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
                                <button className='w-full h-14 relative group whitespace-nowrap bg-[#DB4444] py-4 px-12 flex items-center justify-center text-[white] rounded-sm font-poppins font-bold cursor-pointer text-[16px]'>
                                    <span className='w-full z-10 text-white relative'>View All</span>
                                    <div class="absolute inset-0 bg-[#b82525] w-0 group-hover:w-full  transition-all duration-300 ease-in-out rounded-sm "></div>
                                </button>
                            </motion.div>
                </div>
                
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
                                          
                                            <p className="font-inter whitespace-nowrap text-2xl lg:text-4xl font-semibold leading-12 tracking-[0.04em] text-[#000000]">Recommended For You</p>
                                        </div>
                                    </motion.div>
                                </div>
                
                                <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ amount: 0.1 }}
                                    className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5 place-content-between place-items-center w-full max-w-350 overflow-x-hidden'>
                                    {upperitems.map((upperIcon, index) => (
                                        <div key={index} className='w-full  flex flex-col gap-4 '>
                                            < div className='w-full ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex  
                                                             flex-col justify-center'>
                                                <div className=' flex flex-row justify-between items-start'>
                                                    <div></div>
                                                    <div className='flex flex-col gap-2'>
                                                        <button className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                                            <img src={Wishlist} alt="Wishlist" />
                                                        </button>
                                                        <button className=' w-8.5 h-8.5 rounded-full bg-white flex items-center justify-center'>
                                                            <img src={view} alt="view" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <img src={upperIcon.upperImage} alt="upperIcon" className='w-43 h-38 mx-auto' />
                                            </div>
                
                                            <div className='w-full ProductDetails flex flex-col gap-2'>
                                                <p className='text-[#000000] font-poppins text-[16px] font-medium leading-6 tracking-[0]'>{upperIcon.upperName}</p>
                                                
                                                <div className="flex flex-row items-center space-x-1">
                                                    <p className='text-[#DB4444] font-poppins text-[16px] flex flex-row gap-4 font-medium leading-6 tracking-[0]'>{upperIcon.upperPrice}
                                                    </p>
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


            <Footer />
        </div>

    )
}

export default AllSellingProducts;