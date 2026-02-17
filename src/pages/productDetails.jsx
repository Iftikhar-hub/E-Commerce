import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import { useGetProductDataQuery } from "../services/productApi";
import { sellingItems } from "../utils/data";
import LoginPopup from '../components/LoginPopup';
import { useState, useEffect } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { addToCartBackend } from "../services/adToCart";
import { useGetUserDataQuery } from '../services/userApi';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import RecommendedProducts from "../components/RecommendedItems"
import Loader from "../components/Loader";
import { addToWishlistBackend } from "../services/adToWishlist";


const ProductDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const wishlistItems = useSelector((state) => state.wishlist.items, shallowEqual)
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const { data: productData, isLoading: productLoading, isError: productError } = useGetProductDataQuery();
    const { data: userData } = useGetUserDataQuery();

    const products = productData?.data || [];
    const product = products.find(item => item._id === id || item.id === id);
    const sellingProduct = sellingItems.find(item => item.id === id);

    const handleAddToCart = (product) => {
        if (!userData) {
            // setShowLoginPopup(true);
            toast.error("Please Login to Proceed", {
                position: 'top-right',
            });
            return;
        }

        dispatch(addToCartBackend({ product }))
            .unwrap()
            .then(() => toast.success("Added to cart! "))
            .catch(() => toast.error("Failed to add"));

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

    let content;
    if (productLoading) {
        content = <div class="flex mt-70 justify-center items-center">
            <Loader />
        </div>;
    } else if (productError) {
        content = <p>Error loading product</p>;
    } else if (!product && !sellingProduct) {
        content = <p className="text-center mt-20 text-xl">Product not found</p>;
    } else if (product) {
        content = (

            <div className="w-full flex-1 mx-auto max-w-400">


                <div className="flex flex-row items-center gap-15">
                    <div className="flex h-115 flex-col items-center justify-between gap-4 mt-10 px-4">
                        <div className="p-4  flex items-center justify-center  bg-[#F5F5F5] rounded-sm">
                            <img src={product.image} alt={product.pname || product.name} className=" rotate-30 object-contain h-25 w-25" />
                        </div>
                        <div className="p-4  flex items-center justify-center  bg-[#F5F5F5] rounded-sm">
                            <img src={product.image} alt={product.pname || product.name} className=" rotate-y-190 hue-rotate-180 rotate-x-55 object-contain h-25 w-25" />
                        </div>
                        <div className="p-4  flex items-center justify-center  bg-[#F5F5F5] rounded-sm">
                            <img src={product.image} alt={product.pname || product.name} className=" -rotate-z-60 object-contain h-25 w-25" />
                        </div>
                        
                    </div>

                    <div className="mt-10 h-115 flex items-center justify-center w-80 p-4 bg-[#F5F5F5]">
                        <img src={product.image} alt={product.pname || product.name} className="" />
                    </div>

                    <div className="w-full max-w-100 grow p-4 mt-10 px-6">
                        
                        <h1 className="text-2xl font-bold mb-4">{product.pname || product.name}</h1>
                        <p className="text-lg mb-2 font-bold text-[#DB4444]">Price: ${product.orignalPrice}
                            <span className="line-through text-gray-500 ml-3">${product.discountedPrice}</span>
                        </p>
                        <p className="text-gray-700">{product.description}</p>

                        <div className="w-full flex flex-row gap-4 items-center justify-between">
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

                            {
                                userData ? (
                                    wishlistItems.find((item) => item._id === product._id) ? (
                                        <button className='mt-3 font-medium font-poppins cursor-not-allowed px-2 py-2 text-[white] text-center w-full bg-gray-400 rounded-sm ' disabled>Added to Wishlist</button>
                                    ) : (
                                            <button onClick={() => handleAddToWishlist(product)} className=' mt-3 font-medium font-poppins cursor-pointer px-2 py-2 text-[white] text-center w-full bg-[#DB4444] rounded-sm'>Add to Wishlist</button>
                                    )
                                ) : (
                                        <button onClick={() => handleAddToWishlist(product)} className='relative group mt-3 font-medium font-poppins cursor-pointer px-2 py-2 text-[white] text-center w-full bg-[#DB4444] rounded-sm'>
                                        <span className='w-full z-10 text-white relative'>Add To Wishlist</span>
                                        <div class="absolute inset-0 bg-[#b82525] h-0 group-hover:h-full  transition-all duration-300 ease-in-out rounded-sm "></div>
                                    </button>
                                )
                            }

                        </div>

                        <div className="w-full flex flex-col border border-[#00000080]">
                            <div className="w-full px-2 py-4 flex flex-row items-center justify-between">

                            </div>

                        </div>
                      


                    </div>
                </div>
                <RecommendedProducts className="mt-6" />
            </div>


        );
    } else if (sellingProduct) {
        content = (
            <div className="w-full max-w-100 grow p-4 mt-10 px-6">
                <img src={sellingProduct.sellingImage} alt={sellingProduct.sellingName} className="" />
                <h1 className="text-2xl font-bold">{sellingProduct.sellingName}</h1>
                <p className="text-lg font-bold text-[#DB4444]">
                    {sellingProduct.sellingPrice}
                    <span className="line-through text-gray-500 ml-3">{sellingProduct.sellingDiscounted}</span>
                </p>
                <p className="text-gray-700">{sellingProduct.sellingDescription}</p>
                <button
                    onClick={() => handleAddToCart(sellingProduct)}
                    className="mt-4 w-full bg-[#DB4444] text-white px-8 py-3 cursor-pointer rounded-md hover:bg-[#b82525] transition"
                >
                    Add to Cart
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />
            {content}

            <LoginPopup className='absolute top-0' show={showLoginPopup} onClose={() => setShowLoginPopup(false)} />
            <Footer />
        </div>
    );
};

export default ProductDetails;
