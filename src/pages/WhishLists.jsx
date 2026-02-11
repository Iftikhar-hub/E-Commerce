
// import Wishlist from '../assets/Wishlist.svg'
import view from '../assets/view.svg'
import delet from '../assets/delet.svg'
import YelowStar from '../assets/YelowStar.svg'
import { ProductIcons } from '../utils/data.js'


import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer.jsx";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shallowEqual } from "react-redux";
import { toast } from 'react-toastify';

import { useGetUserDataQuery } from '../services/userApi';
import { addToCartBackend } from "../services/adToCart";


import {
    loadUserWishlist,
    removeFromWishlistBackend,
} from "../services/adToWishlist";


const WhishList = () => {
    const dispatch = useDispatch();
    const { data: userData } = useGetUserDataQuery();
     const cartItems = useSelector((state) => state.cart.items);

    const wishlistItems = useSelector((state) => state.wishlist.items, shallowEqual)
    const totalwishlistitems = wishlistItems.length;
    useEffect(() => {
        if (wishlistItems.length === 0) {
            dispatch(loadUserWishlist());
        }
    }, [])

      const handleRemoveWishlist = (productId) => {
             dispatch(removeFromWishlistBackend({ productId }))
                 .unwrap()
                 .then(() => toast.success("Item Removed from wishlist"))
                 .catch(() => toast.error("Failed To Remove")); 
             
    
    };
    
     const handleAddToCart = (product) => {

    
            dispatch(addToCartBackend({ product }))
                .unwrap()
                .then(() => toast.success("Added to cart! "))
                .catch(() => toast.error("Failed to add Cart"));
    
        };
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />
            <div className="w-full   px-6 lg:px-26 xl:px-36 max-w-400 border-t mx-auto border-[#ccc9c9] mt-4 pt-20 flex-1">
                <div className=" w-full max-w-400 flex flex-col gap-15">
                    <div className="w-full flex flex-row items-center justify-between">
                        <p className="font-poppins text-2xl font-semibold leading-12 tracking-[0.04em]
                         ">WhishList {totalwishlistitems}
                        </p>
                        <button className='px-4 hidden py-2 max-[500px]:hidden border border-[#ccc9c9] rounded-sm cursor-pointer text-center hover:bg-[#DB4444] transition-colors duration-500 ease-in-out hover:text-white'>Move All to Bag</button>
                    </div>

                    <div className='grid no-scrollbar grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-[436px]:grid-cols-1 gap-7.5 w-full max-w-350 overflow-x-auto'>
                        {
                            wishlistItems.length === 0 ? (
                                <p className="text-[22px]  text-red-900 font-bold text-center mt-6">Your wishlist is empty</p>
                            ) : (
                                    wishlistItems.map((product, index) => (
                                    <div className='w-full flex flex-col gap-4 '>
                                        < div className='w-full ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex flex-col    
                                              justify-center'>
                                            <div className='flex flex-row justify-between items-start'>
                                                <p></p>
                                                    <button onClick={() => handleRemoveWishlist(product._id)} className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                                    <img src={delet} alt="delet" />
                                                </button>

                                            </div>
                                                <img key={index} src={product.image} alt="icon" className='w-43 h-38 mx-auto' />
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

                                        <div className='w-full ProductDetails flex flex-col gap-2'>
                                                <p className='text-[#000000] font-poppins text-[16px] font-medium leading-6 tracking-[0]'>{product.pname}</p>
                                                <p className='text-[#DB4444] font-poppins text-[16px] flex flex-row gap-4 font-medium leading-6 tracking-[0]'>${product.orignalPrice}
                                                <span className='text-[#000000] line-through opacity-50'>
                                                        $ {product.discountedPrice}</span>
                                            </p>


                                        </div>
                                    </div>
                                ))
                            
                                
                        )
                                 }
                    </div>
                    <button className='px-4  py-2 hidden max-[500px]:block border border-[#ccc9c9] rounded-sm cursor-pointer text-center hover:bg-[#DB4444] transition-colors duration-500 ease-in-out hover:text-white'>Move All to Bag</button>


                </div>
            </div>

            <Footer />


        </div>



    )
}

export default WhishList; 