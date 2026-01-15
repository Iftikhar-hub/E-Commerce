import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

import bankImage from '../assets/bankImage.png'
import { cartItems } from '../utils/data.js'

// import { cartItems } from '../utils/data.js'

// import React, { useState } from "react";




const CheckOut = () => {

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />
            <div className="w-full max-w-400 px-59 flex flex-col items-start gap-5 mx-auto mt-20">
                <p className='text-[#000000] font-inter font-medium text-[36px] leading-7.5 tracking-[4%] 
                  '>Billing Details</p>
                
                <div className='w-full flex flex-row  gap-45 justify-between  '>
                    <form action="#" className='flex flex-col gap-6  py-1  rounded-sm'>
                        <input type="text" required placeholder='Name' maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0'/>
                        <input type="text" placeholder='Company Name (Optional)' maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0'/>
                        <input type="text" placeholder='Street Address (Optional)' maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0'/>
                        <input type="text" required placeholder='City' maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0'/>
                        <input type="tex" inputMode="numeric" required pattern="[0-9]*" placeholder='Phone Number' maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0' />
                        <input type="email" required placeholder='Email Address' maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0' />
                        <div className='flex flex-row gap-1 items-center' >
                            <input type="checkbox" className='w-4 h-4 cursor-pointer accent-[#DB4444]' />
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>Save this information for faster check-out next time</p>

                        </div>
                        
                    </form>

                    <div className='w-full max-w-130 flex flex-col gap-6  py-1'>
                        {cartItems.map((cart, index) => (
                            <div className=' w-full flex flex-row justify-between items-center'>
                                <div key={index} className='flex flex-row gap-1 items-center'>
                                    <img src={cart.image} alt="PNG" className='w-12 h-10'/>
                                    <p className=''>{ cart.name}</p>

                                </div>
                                <p className='text-[16px] font-normal tracking-0 font-poppins'>{cart.price}</p>
                                

                            </div>
                            
                        ))}

                        <div className='w-full flex flex-row justify-between items-center border-b 
                        border-[#9b9b9b]'>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>Subtotal</p>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>$1750</p>

                        </div>
                        <div className='w-full flex flex-row justify-between items-center border-b 
                        border-[#9b9b9b]'>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>Shipping</p>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>Free</p>

                        </div>
                        <div className='w-full flex flex-row justify-between items-center '>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>Total</p>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>$1750</p>

                        </div>

                        <form action="#" className='flex flex-col gap-6'>
                            <div className='w-full flex flex-row justify-between items-center '>
                                <div className='flex flex-row gap-2 items-center'>
                                    <input  required type="radio" name="gg" id="ff" className='w-4 h-4 accent-[#DB4444] cursor-pointer' />
                                    <p className='text-[16px] font-normal tracking-0 font-poppins'>Bank</p>
                                </div>

                                <img src={bankImage} alt="PNG" />
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <input required type="radio" name="gg" id="ee" className='w-4 h-4 accent-[#DB4444] cursor-pointer' />
                                <p className='text-[16px] font-normal tracking-0 font-poppins'>Cash on Delivery</p>
                            </div>

                            <div className='flex flex-row justify-between h-12 items-center'>
                                <input type='text' placeholder='Coupon Code' className='border text-[#000000]  border-[#00000080]  py-2 px-2 rounded-sm font-medium text-[16px] font-poppins outline-0' />
                                <a href="#" className='bg-[#DB4444] transition-colors duration-500 hover:bg-[#b73434] text-white py-2 px-8 rounded-sm font-medium text-[16px] font-poppins'>Apply Coupon </a>

                            </div>

                            <button href="#" className='bg-[#DB4444] transition-colors duration-500 hover:bg-[#b73434] text-white py-2 px-8 rounded-sm font-medium text-[16px] font-poppins cursor-pointer'>Order Now </button>



                        </form>
                        
                        

                    </div>
                </div>
            </div>
            <div className="flex-1" />
            <Footer />




        </div>
    )
}

export default CheckOut;