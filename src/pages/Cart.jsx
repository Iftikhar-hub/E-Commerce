import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

import { useState } from "react";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, updateQuantity, removeItemFromCart } from '../services/adToCart';
import {motion} from 'framer-motion'





const Cart = () => {

    const dispatch = useDispatch();
   

    const handleQuantityChange = (index, value) => {
        const item = cartItems[index];
        dispatch(updateQuantity({ id: item._id, quantity: Number(value) }));
    };

    const cartItems = useSelector((state) => state.cart.items);
    const subtotal = cartItems.reduce((subTotalPerItem, item) => {
        return subTotalPerItem + item.discountedPrice * item.quantity;
    }, 0);


    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />
            {cartItems.length === 0 ? (
                <p className='text-[22px] text-red-900 font-bold text-center mt-6'>Your cart is empty</p>
            ) : (
                <div className="w-full max-w-400 px-36 flex flex-col gap-20 items-center justify-center mx-auto mt-20">

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ amount: 0.1 }}
                            className="w-full overflow-x-auto">
                       
                        <table className="w-full border-separate border-spacing-y-4">
                            <thead>
                                <tr className="bg-white/5   shadow-sm backdrop-blur-sm">
                                    <th className="px-2 py-2 text-left font-poppins font-normal text-[18px] leading-6 text-black">
                                        Product
                                    </th>
                                    <th className="px-2 py-2 text-left font-poppins font-normal text-[18px] leading-6 text-black">
                                        Price
                                    </th>
                                    <th className="px-2 py-2 text-left font-poppins font-normal text-[18px] leading-6 text-black">
                                        Quantity
                                    </th>
                                    <th className="px-2 py-2 text-left font-poppins font-normal text-[18px] leading-6 text-black">
                                        Subtotal
                                    </th>
                                    <th className="px-2 py-2 text-left font-poppins font-normal text-[18px] leading-6 text-black">
                                        Action
                                    </th>
                                </tr>
                            </thead>


                            <tbody>
                                {cartItems.map((cart, index) => (


                                    <tr
                                        key={cart._id ?? index}
                                        className="bg-white/5 shadow-sm backdrop-blur-sm rounded-sm"
                                    >

                                        <td className="px-2 py-2">
                                            <div className="flex items-center gap-3 ">
                                                <img
                                                    src={cart.image}
                                                    alt="Product"
                                                    className="w-13.5 h-13.5 object-cover"
                                                />
                                                <p className="font-poppins font-normal text-[16px] leading-6 text-black">
                                                    {cart.pname}
                                                </p>
                                            </div>
                                        </td>


                                        <td className="px-2 py-2 font-poppins font-normal text-[16px] leading-6 text-black">
                                            ${cart.discountedPrice ?? cart.orignalPrice}

                                        </td>


                                        <td className="px-2 py-2">
                                            <input
                                                type="number"
                                                min={1}
                                                value={cart.quantity}
                                                onChange={(e) => handleQuantityChange(index, e.target.value)}
                                                className="border border-[#87878a] w-12 pl-2 rounded-sm"
                                            />
                                        </td>



                                        <td className="px-2 py-2 font-poppins font-normal text-[16px] leading-6 text-black">

                                            ${cart.discountedPrice ? cart.discountedPrice * cart.quantity : cart.orignalPrice * cart.quantity}

                                        </td>
                                        <td>
                                            <button
                                                onClick={() => dispatch(removeItemFromCart(cart._id))}
                                                className="bg-red-600 text-white px-2 py-1 rounded-sm"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>


                                ))}
                            </tbody>
                        </table>
                        <div className='w-full flex flex-row justify-between items-center'>
                            <a href="#" className='border border-[#00000080] py-4 px-12 rounded-sm font-medium text-[16px] font-poppins transition-colors duration-500 hover:bg-[#DB4444] hover:text-[white] hover:border-[#DB4444]'>Return to Shop </a>


                        </div>
                    </motion.div>

                    <div className='w-full flex flex-row justify-between'>
                        <div className='flex flex-row gap-4 h-12 items-center'>
                            <input type='text' placeholder='Coupon Code' className='border text-[#000000]  border-[#00000080]  py-2 px-2 rounded-sm font-medium text-[16px] font-poppins outline-0' />
                            <a href="#" className='bg-[#DB4444] transition-colors duration-500 hover:bg-[#b73434] text-white py-2 px-8 rounded-sm font-medium text-[16px] font-poppins'>Apply Coupon </a>

                        </div>

                        <div className='border w-full max-w-117.5 border-[#000000] rounded-sm flex flex-col px-4 py-6 gap-6'>
                            <p className='text-[#000000] text-[20px] font-poppins font-medium'>Cart Total</p>
                            <div className='border-b border-[#a3a3a3] pb-2 w-full flex flex-row justify-between'>
                                <p className='text-[16px] font-poppins font-normal'>Subtotal</p>
                                <p className='text-[16px] font-poppins font-normal'>${subtotal}</p>

                            </div>
                            <div className='border-b border-[#a3a3a3] pb-2 w-full flex flex-row justify-between'>
                                <p className='text-[16px] font-poppins font-normal'>Shipping:</p>
                                <p className='text-[16px] font-poppins font-normal'>Free</p>

                            </div>
                            <div className=' w-full flex flex-row justify-between'>
                                <p className='text-[16px] font-poppins font-normal'>Total:</p>
                                <p className='text-[16px] font-poppins font-normal'>${subtotal}</p>

                            </div>

                            <a href="/CheckOut" className='bg-[#DB4444] transition-colors duration-500 hover:bg-[#b73434] text-white py-2 text-center rounded-sm font-medium text-[16px] font-poppins'>Proceed to Checkout </a>

                        </div>

                    </div>



                </div>
            )}
            <div className="flex-1" />
            <Footer />




        </div>
    )
}

export default Cart;