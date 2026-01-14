
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaGoogle } from  'react-icons/fa';

import signupImage from '../assets/signupImage.png'

const SignUp = () => {
    return (
        <div className="flex flex-col h-full">
            <Header />
            <Navbar />
            <div className="w-full px-36 max-w-400 border-t mx-auto border-[#ccc9c9] mt-4 flex-1">
                <div className="flex flex-row items-center justify-between gap-32.25 mt-15">
                    <div className="w-full max-w-201.25 rounded-sm h-195.25 bg-[#CBE4E8]">
                        <img src={signupImage} alt="signupImage" className=" w-229.75"/>
                    </div>

                    <div className="w-full max-w-92.75 flex flex-col gap-8">
                        <div className="flex flex-col gap-4 items-start">
                            <p className="font-inter font-medium text-[36px] leading-7.5 tracking-[4%] text-[#000000]">Create an account</p>
                            <p className="font-inter font-regular text-[16px] leading-6 tracking-[0] text-[#000000]">Enter your details below</p>

                        </div>

                        <form className="w-full max-w-80 flex flex-col gap-4">
                            <input type="text" placeholder="Name" className="border-b h-12 p-2 border-[#ccc9c9] outline-0" required/>
                            <input type="char" placeholder="Email or Phone Number" className="border-b h-12 p-2 border-[#ccc9c9] outline-0" required/>
                            <input type="password" placeholder="Password" className="border-b h-12 p-2 border-[#ccc9c9] outline-0" required />
                        
                            <button className="w-full bg-[#DB4444] py-4 flex items-center justify-center  
                             rounded-sm text-[#FAFAFA] text-[16px] font-medium font-poppins cursor-pointer">Create Account

                            </button>
                    
                        </form>
                        <button className="w-full max-w-80 border border-[#DB4444] py-4 flex flex-row gap-4 items-center justify-center rounded-sm text-[#000000]  text-[16px] font-medium font-poppins cursor-pointer"><FaGoogle className="w-6 h-6 text-[#DB4444]" /> Sign up with Google</button>

                        <div className="w-full max-w-80 flex flex-row gap-1 justify-center items-center"> 
                            <p className="font-poppins font-regular text-[16px] leading-6 tracking-[0] text-[#424242]">Already have account?</p>
                            <a href='/Login' className=" cursor-pointer font-poppins font-regular text-[16px] leading-6 tracking-[0] text-[#424242] underline underline-offset-4">Login</a>
                        </div>

                    </div>
                </div>
           <div className="flex-1" />
            </div>

            <Footer />

            
        </div>



    )
}

export default SignUp; 