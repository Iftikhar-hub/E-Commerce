
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { FaGoogle } from 'react-icons/fa';

import signupImage from '../assets/signupImage.png'

const Login = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />
            <div className="w-full px-36 max-w-400 border-t mx-auto border-[#ccc9c9] mt-4 flex-1">
                <div className="flex flex-row items-center justify-between gap-32.25 mt-15">
                    <div className="w-full max-w-201.25 rounded-sm h-195.25 bg-[#CBE4E8]">
                        <img src={signupImage} alt="signupImage" className=" w-229.75" />
                    </div>

                    <div className="w-full max-w-92.75 flex flex-col gap-8">
                        <div className="flex flex-col gap-4 items-start">
                            <p className="font-inter font-medium text-[36px] leading-7.5 tracking-[4%] text-[#000000]">Log in to Exclusive</p>
                            <p className="font-inter font-regular text-[16px] leading-6 tracking-[0] text-[#000000]">Enter your details below</p>

                        </div>

                        <form className="w-full max-w-80 flex flex-col gap-4">
                            <input type="char" placeholder="Email or Phone Number" className="border-b h-12 p-2 border-[#ccc9c9] outline-0" required />
                            <input type="password" placeholder="Password" className="border-b h-12 p-2 border-[#ccc9c9] outline-0" required />
                            <div className="w-full max-w-80 flex flex-row gap-1 justify-between items-center">
                                <button className="bg-[#DB4444] px-6 py-2 flex flex-row gap-4 items-center justify-center rounded-sm text-[#FAFAFA]  text-[16px] font-medium font-poppins cursor-pointer"> Login</button>
                                <a href='#' className=" cursor-pointer font-poppins font-regular text-[16px] leading-6 tracking-[0] text-[#DB4444]">Forget Password?</a>
                            </div>

                        </form>
                       

                       

                    </div>
                </div>
                <div className="flex-1" />
            </div>

            <Footer />


        </div>



    )
}

export default Login; 