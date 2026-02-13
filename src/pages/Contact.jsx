import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { BASE_URL } from "../utils/data";
import axios from "axios";
import { toast } from 'react-toastify'
const Contact = () => {

    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactForm({
            ...contactForm, [name]: value

        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(`${BASE_URL}/api/user/send-email`, contactForm);
        if (res.status === 200) {
            toast.success("Email has been sent successfully", {
                position: 'top-right',
                autoClose: 3000,
            });
        } else {
            toast.error("Error in sending email", {
                position: 'top-right',
                autoClose: 3000,
            });
        }

    }



    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar />

            <div className="flex-1 px-6 lg:px-26 xl:px-36 mx-auto">
                <p className="text-black text-[20px]  font-medium sm:font-bold sm:text-[22px] mt-6">Contact Us</p>

                <div className=" w-full max-w-400  flex flex-col gap-20 items-end justify-center mx-auto md:mt-20 mt-6">
                    
                    <div className="w-full flex gap-20 flex-col xl:flex-row justify-between items-start ">
                        <div className=" max-[500px]:hidden flex justify-between xl:flex-col p-4 gap-16 shadow-[0px_1px_13px_0px_#0000000D] rounded-lg"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#DB4444]"><IoCallOutline className="text-white text-[22px]" /></div>
                                    <p className="font-poppins text-[#000000] font-medium text-[16px] leading-6">Call to Us</p>
                                </div>
                                <p className="font-poppins text-[#000000] font-regular text-[14px] leading-6">We are available 24/7, 7 days a week.</p>
                                <p className="font-poppins text-[#000000] font-regular text-[14px] leading-6">Phone: +8801611112222</p>

                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#DB4444]"><MdOutlineMail className="text-white text-[22px]" /></div>
                                    <p className="font-poppins text-[#000000] font-medium text-[16px] leading-6">Write To US</p>
                                </div>
                                <p className="font-poppins text-[#000000] font-regular text-[14px] leading-6">Fill out our form and we will contact you within 24 hours.</p>
                                <p className="font-poppins text-[#000000] font-regular text-[14px] leading-6">Emails: customer@exclusive.com</p>
                                <p className="font-poppins text-[#000000] font-regular text-[14px] leading-6">Emails: support@exclusive.com</p>

                            </div>


                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col mt-0 p-4 gap-6 w-full shadow-[0px_1px_13px_0px_#0000000D] rounded-lg">

                            <div className="grid grid-cols-3 max-[500px]:grid-cols-1  items-center gap-4 justify-between">
                                <div className="flex flex-row gap-2 py-2 pl-4 bg-[#F5F5F5] rounded-sm  overflow-x-hidden">
                                    <p className="text-[red]">*</p>
                                    <input type="text" required name="name" onChange={handleChange} placeholder="Your Name" className="outline-0 text-[14px]" />

                                </div>
                                <div className="flex flex-row gap-2 py-2 pl-4 bg-[#F5F5F5] rounded-sm  overflow-x-hidden">
                                    <p className="text-[red]">*</p>
                                    <input type="email" required name="email" onChange={handleChange} placeholder="Your Email" className="outline-0 text-[14px]" />

                                </div>
                                <div className="flex flex-row gap-2 py-2 pl-4 bg-[#F5F5F5] rounded-sm  overflow-x-hidden">
                                    <p className="text-[red]">*</p>
                                    <input type="text" required name="phone" onChange={handleChange} placeholder="Your Number" className="outline-0 text-[14px]" />

                                </div>

                            </div>

                            <textarea type="text" name="message" onChange={handleChange} className="w-full h-51.75 pt-2 px-2 bg-[#F5F5F5] rounded-sm outline-0 text-start text-[14px]" placeholder="Message" />

                            <div className="w-full flex justify-end">
                                <button type="submit" className="bg-[#DB4444] max-[500px]:w-full relative group px-4 py-3 flex items-center justify-center  rounded-sm text-[14px] font-bold text-white cursor-pointer">
                                    <span className='z-10 relative'>Send Message</span>
                                    <div class="absolute inset-0 bg-[#b82525]   h-0 group-hover:h-full  transition-all duration-300 ease-in-out rounded-sm "></div>
                                </button>

                            </div>



                        </form>

                        <div className="w-full hidden max-[500px]:flex  justify-between flex-col p-4 gap-16 shadow-[0px_1px_13px_0px_#0000000D] rounded-lg"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#DB4444]"><IoCallOutline className="text-white text-[22px]" /></div>
                                    <p className="font-poppins text-[#000000] font-medium text-[16px] leading-6">Call to Us</p>
                                </div>
                                <p className="font-poppins text-[#000000] font-regular text-[14px] leading-6">We are available 24/7, 7 days a week.</p>
                                <p className="font-poppins text-[#000000] font-regular text-[14px] leading-6">Phone: +8801611112222</p>

                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#DB4444]"><MdOutlineMail className="text-white text-[22px]" /></div>
                                    <p className="font-poppins text-[#000000] font-medium text-[16px] leading-6">Write To US</p>
                                </div>
                                <p className="font-poppins text-[#000000] font-regular text-[14px] leading-6">Fill out our form and we will contact you within 24 hours.</p>
                                <p className="font-poppins text-[#000000] font-regular text-[14px] leading-6">Emails: customer@exclusive.com</p>
                                <p className="font-poppins text-[#000000] font-regular text-[14px] leading-6">Emails: support@exclusive.com</p>

                            </div>


                        </div>

                    </div>

                </div>
            </div>

            <Footer />

        </div>

    )
}

export default Contact;