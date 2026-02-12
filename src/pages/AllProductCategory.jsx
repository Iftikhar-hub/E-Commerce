import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Wishlist from '../assets/Wishlist.svg'
import view from '../assets/view.svg'

import { useParams } from "react-router-dom";
import { useGetProductDataQuery } from "../services/productApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartBackend } from "../services/adToCart";
import { useGetUserDataQuery } from '../services/userApi';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Loader from "../components/Loader";
import RecommendedProducts from "../components/RecommendedItems"



const AllProductCategory = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const cartItems = useSelector((state) => state.cart.items);

    const { data: userData } = useGetUserDataQuery();


    const { data, isLoading, isError } = useGetProductDataQuery(category);

    if (isLoading) return <div class="flex mt-70 justify-center items-center">
        <Loader/>
    </div>;
    if (isError) return <p>Error loading products</p>;
    const handleAddToCart = (product) => {
        if (!userData) {

            toast.error("Please Login to Proceed", {
                position: 'top-right',
            });
            return;
        }

        dispatch(addToCartBackend({ product }))
            .unwrap()
            .then(() => toast.success("Added to cart! 🛒"))
            .catch(() => toast.error("Failed to add"));

    };


    return (

        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar />

            <div className="relative flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
                {data?.data.length === 0 && <p>No products found in {category}</p>}
               
                {data?.data.map((product) => (
                    <div key={product._id ?? index} className=' flex flex-col gap-4 '>
                        {/* {isLoading && <Loader />} */}
                        <div className='w-full max-w-67 ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex flex-col    
                          justify-center'>
                            <div className='flex flex-row justify-between items-start'>
                                <p className='py-1 px-3 rounded-sm bg-[#DB4444] text-[#FAFAFA] text-[12px] font-normal leading-4.5 tracking-0 text-center'>-40%</p>
                                <div className='flex flex-col gap-2'>
                                    <button className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                        <img src={Wishlist} alt="Wishlist" />
                                    </button>
                                    <button className=' w-8.5 h-8.5 rounded-full  flex items-center justify-center'>
                                        <img src={view} alt="view" className="hidden" />
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
                            {/* <div className="flex flex-row items-center space-x-1">
                                {iconsArray.map((_, index) => (
                                    <img src={YelowStar} className="h-4 w-4" alt="YelowStar" key={index}>
                                    </img>
                                ))}
                                <p className='text-[#000000]'>(88)</p>
                            </div> */}

                        </div>
                    </div>
                ))}
            </div>
            <RecommendedProducts className="mt-6"/>



            <Footer className="mt-auto" />
        </div>
    );
};

export default AllProductCategory;
