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
// import { addItemToCart } from '../services/adToCart';

import { motion } from 'framer-motion';
import { addToCartBackend } from "../services/adToCart";



const Products = () => {
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

        // dispatch backend cart action
        dispatch(
            addToCartBackend({
                productId: product._id ?? product.id,
                quantity: 1, // default add 1
            })
        )
            .unwrap() // optional: to handle promise result
            .then(() => {
                console.log("Product added to cart in backend!");
            })
            .catch((err) => {
                console.error("Failed to add product to cart:", err);
            });
    };

    const { data } = useGetProductDataQuery();
    const [displayProducts, setDisplayedProducts] = useState([]);
    useEffect(() => {
        if (data && data.data) {
            setDisplayedProducts(data.data)
        }

    }, [data])

    const cartItems = useSelector((state) => state.cart.items);


    return (
        <div className="w-full max-w-400 mx-auto px-6 lg:px-26 xl:px-36 mt-25 flex flex-col items-center gap-10">
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
                               text-[#000000]">03</p>
                        </div>
                        <img src={Semiclone} alt="Semiclone" className="w-1 h-4" />
                        <div className="flex flex-col  gap-1">
                            <p className="font-poppins text-xs font-medium leading-4.5 tracking-normal
                              text-[#000000]">Hours</p>
                            <p className="font-inter lg:text-3xl font-bold leading-7.5 tracking-[0.04em]
                               text-[#000000]">23</p>
                        </div>
                        <img src={Semiclone} alt="Semiclone" className="w-1 h-4 hidden sm:block" />
                        <div className=" flex-col  gap-1 hidden sm:flex">
                            <p className="font-poppins text-xs font-medium leading-4.5 tracking-normal
                              text-[#000000]">Minutes</p>
                            <p className="font-inter lg:text-3xl font-bold leading-7.5 tracking-[0.04em]
                               text-[#000000]">19</p>
                        </div>
                        <img src={Semiclone} alt="Semiclone" className="w-1 h-4 hidden sm:block" />
                        <div className=" flex-col  gap-1 hidden sm:flex">
                            <p className="font-poppins text-xs font-medium leading-4.5 tracking-normal
                              text-[#000000]">Seconds</p>
                            <p className="font-inter lg:text-3xl font-bold leading-7.5 tracking-[0.04em]
                               text-[#000000]">56</p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.1 }}
                    className='flex flex-row gap-2 max-[380px]:hidden'>
                    <div className='lg:w-11.5 lg:h-11.5 flex items-center justify-center rounded-full bg-[#F5F5F5] '>
                        <img src={iconsleft} alt="iconsleft" />
                    </div>
                    <div className='lg:w-11.5 lg:h-11.5 flex items-center justify-center rounded-full bg-[#F5F5F5] '>
                        <img src={iconsright} alt="iconsright" />
                    </div>

                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.1 }}
                className=' flex flex-row gap-7.5 w-full max-w-350 no-scrollbar overflow-x-auto'>
                {displayProducts && displayProducts.map((product, index) => (
                    <div key={product._id ?? index} className='w-full max-w-67.5 flex flex-col gap-4 '>
                        < div className='w-64 ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex flex-col    
                          justify-center'>
                            <div className='flex flex-row justify-between items-start'>
                                <p className='py-1 px-3 rounded-sm bg-[#DB4444] text-[#FAFAFA] text-[12px] font-normal leading-4.5 tracking-0 text-center'>-40%</p>
                                <div className='flex flex-col gap-2'>
                                    <button className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                        <img src={Wishlist} alt="Wishlist" />
                                    </button>
                                    <button className=' w-8.5 h-8.5 rounded-full bg-white flex items-center justify-center'>
                                        <img src={view} alt="view" />
                                    </button>
                                </div>
                            </div>
                            <img src={product.image} alt="icon" className='w-43 h-38 mx-auto' />
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
                    </div>
                ))}

                <LoginPopup
                    show={showLoginPopup}
                    onClose={() => setShowLoginPopup(false)}
                />
            </motion.div>

            <button className='w-58.5 relative group h-14 bg-[#DB4444] py-4 px-12 flex items-center justify-center text-[white] rounded-sm font-poppins font-bold cursor-pointer text-[16px]'>
                <span className='z-10 relative'>View All Products</span>
                <div class="absolute inset-0 bg-[#b82525]   w-0 group-hover:w-full  transition-all duration-300 ease-in-out rounded-sm
                group-hover:scale-103  "></div>
            </button>

        </div>

    )
}

export default Products;