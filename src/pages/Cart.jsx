import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

import { cartItems } from '../utils/data.js'

import React, { useState } from "react";




const Cart = () => {
    const [cart, setCart] = useState(cartItems)

    const handleQuantityChange = (index, value) => {
        const updatedCart = [...cart]
        updatedCart[index].quantity = Number(value)
        setCart(updatedCart)
    }


    

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />
            <div className="w-full max-w-400 px-36 flex flex-col gap-20 items-center justify-center mx-auto mt-20">
                <div className="w-full overflow-x-auto">
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
                            </tr>
                        </thead>

                      
                        <tbody>
                            {cart.map((item, index) => (

                                <>
                                   
                                    
                                <tr
                                    key={index}
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
                                                {cart.name}
                                            </p>
                                        </div>
                                    </td>

                              
                                    <td className="px-2 py-2 font-poppins font-normal text-[16px] leading-6 text-black">
                                            ${item.price}

                                    </td>

                                  
                                    <td className="px-2 py-2">
                                        <input
                                                type="number"
                                                min={1}
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(index, e.target.value)}
                                            className="border border-[#87878a] w-12 pl-2 rounded-sm"
                                        />
                                    </td>

                                
                                        <td className="px-2 py-2 font-poppins font-normal text-[16px] leading-6 text-black">
                                           
                                            ${item.price * item.quantity}

                                    </td>
                                    </tr>
                                </>
                                
                            ))}
                        </tbody>
                    </table>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <a href="#" className='border border-[#00000080] py-4 px-12 rounded-sm font-medium text-[16px] font-poppins transition-colors duration-500 hover:bg-[#DB4444] hover:text-[white] hover:border-[#DB4444]'>Return to Shop </a>
                        <a href="#" className='border border-[#00000080] py-4 px-12 rounded-sm font-medium text-[16px] font-poppins transition-colors duration-500 hover:bg-[#DB4444] hover:text-[white] hover:border-[#DB4444]'>Update Cart </a>

                    </div>
                </div>

                <div className='w-full flex flex-row justify-between'>
                    <div className='flex flex-row gap-4 h-12 items-center'>
                        <input type='text' placeholder='Coupon Code'  className='border text-[#000000]  border-[#00000080]  py-2 px-2 rounded-sm font-medium text-[16px] font-poppins outline-0'/>
                        <a href="#" className='bg-[#DB4444] transition-colors duration-500 hover:bg-[#b73434] text-white py-2 px-8 rounded-sm font-medium text-[16px] font-poppins'>Apply Coupon </a>

                    </div>

                    <div className='border w-full max-w-117.5 border-[#000000] rounded-sm flex flex-col px-4 py-6 gap-6'>
                        <p className='text-[#000000] text-[20px] font-poppins font-medium'>Cart Total</p>
                        <div className='border-b border-[#a3a3a3] pb-2 w-full flex flex-row justify-between'>
                            <p className='text-[16px] font-poppins font-normal'>Subtotal</p>
                            <p className='text-[16px] font-poppins font-normal'>$120</p>

                        </div>
                        <div className='border-b border-[#a3a3a3] pb-2 w-full flex flex-row justify-between'>
                            <p className='text-[16px] font-poppins font-normal'>Shipping:</p>
                            <p className='text-[16px] font-poppins font-normal'>Free</p>

                        </div>
                        <div className=' w-full flex flex-row justify-between'>
                            <p className='text-[16px] font-poppins font-normal'>Total:</p>
                            <p className='text-[16px] font-poppins font-normal'>$1200</p>

                        </div>

                        <a href="/CheckOut" className='bg-[#DB4444] transition-colors duration-500 hover:bg-[#b73434] text-white py-2 text-center rounded-sm font-medium text-[16px] font-poppins'>Proceed to Checkout </a>

                    </div>

                </div>



            </div>
            <div className="flex-1" />
            <Footer />




        </div>
    )
}

export default Cart;