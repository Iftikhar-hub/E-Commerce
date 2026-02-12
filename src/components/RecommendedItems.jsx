
import { useGetProductDataQuery } from '../services/productApi.js'
import { useEffect, useState } from "react";
import { useGetUserDataQuery } from '../services/userApi.js';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import view from '../assets/view.svg'
import YelowStar from '../assets/YelowStar.svg'
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RecommendedProducts = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: userData } = useGetUserDataQuery();
    const numberOfIcons = 5;
    const iconsArray = Array.from({ length: numberOfIcons });
    

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

        <div className="w-full px-6 mt-12 flex flex-col gap-6">
            <p className="text-black font-bold text-[26px] font-poppins leading-6">Recommended For You</p>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5  max-w-350 overflow-x-hidden no-scrollbar'>
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
            </div>


        </div>


    )
}

export default RecommendedProducts;