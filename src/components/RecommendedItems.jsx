
import { useGetProductDataQuery } from '../services/productApi.js'
import { useEffect, useState } from "react";
import { useGetUserDataQuery } from '../services/userApi.js';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import view from '../assets/view.svg'
import YelowStar from '../assets/YelowStar.svg'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addToWishlistBackend } from '../services/adToWishlist.js';
import { addToCartBackend } from '../services/adToCart.js';

const RecommendedProducts = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: userData } = useGetUserDataQuery();
    const numberOfIcons = 5;
    const iconsArray = Array.from({ length: numberOfIcons });
    

    const { data } = useGetProductDataQuery("bestSelling");
    const [displayProducts, setDisplayedProducts] = useState([]);
    const wishlistItems = useSelector((state) => state.wishlist.items, shallowEqual)

    useEffect(() => {
        if (data && data.data) {
            setDisplayedProducts(data.data)
        }

    }, [data])

     const handleAddToCart = (product) => {
                if (!userData) {
                    toast.error("Please Login to Cart", {
                        position: 'top-right',
                    });
                    return;
                }
        
                dispatch(addToCartBackend({ product }))
                    .unwrap()
                    .then(() => toast.success("Added to cart! "))
                    .catch(() => toast.error("Failed to add Cart"));
        
            };

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

        <div className="w-full px-6 mt-12 flex flex-col gap-6">
            <p className="text-black font-bold text-[26px] font-poppins leading-6">Recommended For You</p>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5  max-w-350 overflow-x-hidden no-scrollbar'>
                {displayProducts && displayProducts?.slice(0, 4).map((product, index) => (
                    <div key={product._id ?? index} className='w-full  flex flex-col gap-4 '>
                        < div className='w-ful ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex  
                                             flex-col justify-center group'>
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

                            <div className='invisible  group-hover:visible '>
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
            </div>


        </div>


    )
}

export default RecommendedProducts;