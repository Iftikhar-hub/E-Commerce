import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import axios from "axios";

import bankImage from '../assets/bankImage.png'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {motion} from 'framer-motion'



const CheckOut = () => {

    const [Option, setOption] = useState('');

    const [userInfo, setUserInfo] = useState({
        userName: '',
        userCity: '',
        userNumber: '',
        userEmail: ''
    })

    const userInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
        console.log(userInfo);

    }


    const handleSubmit = async () => {
        if (!userInfo.userName || !userInfo.userCity || !userInfo.userNumber || !userInfo.userEmail) {
            alert('Please fill in all required billing details');
            return;
        }
        if (!Option) {
            alert('Please select a payment method');
            return;
        }

        if (Option === 'BANK') {
            try {
                const res = await axios.post(
                    "http://localhost:8000/create-checkout-session",
                    { cartItems },
                    {userInfo: userInfo},
                    { headers: { 'Content-Type': 'application/json' } }


                );
                console.log("Stripe session response:", res.data);
                if (res.data.url) {
                    window.location.href = res.data.url;
                } else {
                    alert("Stripe session creation failed");
                }

               
            } catch (err) {
                console.error(err);
                alert("Payment failed");
            }

        }
        if (Option === 'COD') {
            alert('Order placed successfully');
        }




    }
    const cartItems = useSelector((state) => state.cart.items);
    const subtotal = cartItems.reduce((subTotalPerItem, item) => {
        return subTotalPerItem + item.discountedPrice * item.quantity;
    }, 0);

    const [productCoupon, setProductCoupon] = useState({
        coupon: ''
    })

    const handleCouponChange = (e) => {
        const { name, value } = e.target;
        setProductCoupon({ ...productCoupon, [name]: value });
    }

    const couponSubmit = () => {
        if (productCoupon.coupon) {
            alert('Coupon did not match');
        }

    }

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />
            <div className="w-full max-w-400 px-59 flex flex-col items-start gap-5 mx-auto mt-20">
                <p className='text-[#000000] font-inter font-medium text-[36px] leading-7.5 tracking-[4%] 
                  '>Billing Details</p>

                <div className='w-full flex flex-row  gap-45 justify-between  '>
                    <motion.form action="#"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ amount: 0.1 }}
                        className='flex flex-col gap-6  py-1  rounded-sm'>
                        <input type="text" required placeholder='Name' name='userName' value={userInfo.userName} onChange={userInfoChange} maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0' />
                        <input type="text" placeholder='Company Name (Optional)' maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0' />
                        <input type="text" placeholder='Street Address (Optional)' maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0' />
                        <input type="text" required placeholder='City' name='userCity' value={userInfo.userCity} onChange={userInfoChange} maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0' />
                        <input type="tex" inputMode="numeric" required pattern="[0-9]*" name='userNumber' value={userInfo.userNumber} onChange={userInfoChange} placeholder='Phone Number' maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0' />
                        <input type="email" required placeholder='Email Address' name='userEmail' value={userInfo.userEmail} onChange={userInfoChange} maxLength={50} className='w-100 px-2 py-1 border-b border-[#e4e3e3] outline-0' />
                        <div className='flex flex-row gap-1 items-center' >
                            <input type="checkbox" className='w-4 h-4 cursor-pointer accent-[#DB4444]' />
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>Save this information for faster check-out next time</p>

                        </div>

                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ amount: 0.1 }}
                        className='w-full max-w-130 flex flex-col gap-6  py-1'>
                        {cartItems.map((cart, index) => (
                            <div key={index} className=' w-full flex flex-row justify-between items-center'>
                                <div key={index} className='flex flex-row gap-1 items-center'>
                                    <img src={cart.image} alt="PNG" className='w-12 h-10' />
                                    <p className=''>{cart.pname}</p>

                                </div>
                                <p className='text-[16px] font-normal tracking-0 font-poppins'>${cart.discountedPrice ? cart.discountedPrice * cart.quantity : cart.orignalPrice * cart.quantity}</p>


                            </div>

                        ))}

                        <div className='w-full flex flex-row justify-between items-center border-b 
                        border-[#9b9b9b]'>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>Subtotal</p>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>${subtotal}</p>

                        </div>
                        <div className='w-full flex flex-row justify-between items-center border-b 
                        border-[#9b9b9b]'>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>Shipping</p>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>Free</p>

                        </div>
                        <div className='w-full flex flex-row justify-between items-center '>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>Total</p>
                            <p className='text-[16px] font-normal tracking-0 font-poppins'>${subtotal}</p>

                        </div>

                        <form className='flex flex-col gap-6'>
                            <div className='w-full flex flex-row justify-between items-center '>
                                <div className='flex flex-row gap-2 items-center'>
                                    <input type="radio" name="gg" id="ff" className='w-4 h-4 accent-[#DB4444] cursor-pointer' onChange={(e) => setOption(e.target.value)} value="BANK" />
                                    <p className='text-[16px] font-normal tracking-0 font-poppins'>Bank</p>
                                </div>

                                <img src={bankImage} alt="PNG" />
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <input type="radio" name="gg" id="ee" className='w-4 h-4 accent-[#DB4444] cursor-pointer'
                                    onChange={(e) => setOption(e.target.value)} value="COD" />
                                <p className='text-[16px] font-normal tracking-0 font-poppins'>Cash on Delivery</p>
                            </div>

                            <div className='flex flex-row justify-between gap-5 h-12 items-center'>
                                <input type='text' placeholder='Coupon Code' onChange={handleCouponChange} name='coupon'
                                    value={productCoupon.coupon} className='border text-[#000000]  border-[#00000080]  py-2 px-2 rounded-sm font-medium text-[16px] font-poppins outline-0' />
                                <button onClick={couponSubmit} className='bg-[#DB4444] transition-colors duration-500 hover:bg-[#b73434] text-white py-2 px-8 whitespace-nowrap rounded-sm font-medium text-[16px] font-poppins'>Apply Coupon </button>

                            </div>


                            <button type="button" onClick={handleSubmit} className='bg-[#DB4444] transition-colors duration-500 hover:bg-[#b73434] text-white py-2 px-8 rounded-sm font-medium text-[16px] font-poppins cursor-pointer'>Order Now </button>






                        </form>



                    </motion.div>
                </div>
            </div>
            <div className="flex-1" />
            <Footer />




        </div>
    )
}

export default CheckOut;