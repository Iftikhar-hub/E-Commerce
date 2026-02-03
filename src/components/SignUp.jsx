
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./footer";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

import signupImage from '../assets/signupImage.png'
import hide from '../assets/hide.png'
import visible from '../assets/visible.png'
import {motion} from 'framer-motion'

// import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye'

const SignUp = () => {
    const [registerForm, setRegisterForm] = useState({
        fname: "", email: "", file: null, pass: "", cpass: ""
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate()

    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(hide);

    const handleToggle = (e) => {
        if (type === 'password') {
            setIcon(visible);
            setType('text')
        } else {
            setIcon(hide)
            setType('password')
        }
    }
   
    const handleChange = (e) => {
         const { name, value, files } = e.target;
           if (name === "file") {
             setRegisterForm({ ...registerForm, file: files[0] });
         } else {
            setRegisterForm({ ...registerForm, [name]: value });
    }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
              formData.append("fname", registerForm.fname);
              formData.append("email", registerForm.email);
              formData.append("pass", registerForm.pass);
              formData.append("cpass", registerForm.cpass);
              formData.append("file", registerForm.file);
            const res = await axios.post("https://e-commerce-nu-five-82.vercel.app/api/user/user-insert", formData,
                {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setMessage(res.data.msg); 
            navigate('/login')
            if (!res.data.success) {
                alert("Registration failed. Please try again.");
                return;
            }
            
            
        } catch (err) {
            
            setMessage(err.response?.data?.msg || "Something Wrong, Please try again...");
        }
    };
    return (
        <div className="flex flex-col h-full">
            <Header />
            <Navbar />
            <div className="w-full px-36 max-w-400 border-t mx-auto border-[#ccc9c9] mt-4 flex-1">
                <div className="flex flex-row items-center justify-between gap-32.25 mt-15">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ amount: 0.1 }}
                        className="w-full max-w-201.25 rounded-sm h-195.25 bg-[#CBE4E8]">
                        <img src={signupImage} alt="signupImage" className=" w-229.75"/>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ amount: 0.1 }}
                        className="w-full max-w-92.75 flex flex-col gap-8">
                        <div className="flex flex-col gap-4 items-start">
                            <p className="font-inter font-medium text-[36px] leading-7.5 tracking-[4%] text-[#000000]">Create an account</p>
                            <p className="font-inter font-regular text-[16px] leading-6 tracking-[0] text-[#000000]">Enter your details below</p>
                            {message && (
                                <div
                                    style={{
                                        marginTop: "10px",
                                        color: message.includes("successful") ? "green" : "red"
                                    }}
                                >
                                    {message}
                                </div>
                            )}

                        </div>

                        <form onSubmit={handleSubmit} encType="multipart/form-data" className="w-full max-w-80 flex flex-col gap-4">
                            <input type="text" name='fname' value={registerForm.fname}
                                onChange={handleChange} placeholder="Name" className="border-b h-12 p-2 border-[#ccc9c9] outline-0" required />
                            
                            <input type="email" name='email' value={registerForm.email}
                                onChange={handleChange} placeholder="Email" className="border-b h-12 p-2 border-[#ccc9c9] outline-0" required />
                            <input onChange={handleChange} type="file" name="file" className="border-b h-12 p-2 border-[#ccc9c9] outline-0 text-[#6e6d6d]"
                                id="file"  />
                            <div className="w-full flex flex-row justify-between">
                                <input type={type} name='pass' value={registerForm.pass}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setPassword(e.target.value);
                                    }}
                                    placeholder="Password" className="w-full border-b h-12 p-2 border-[#ccc9c9] outline-0" required />
                                <span className="flex justify-around items-center" onClick={handleToggle}>
                                    <img src={icon} alt="PNG" className="w-6 h-6" />
                                </span>

                            </div>
                           

                            <input type="password" name='cpass' value={registerForm.cpass}
                                onChange={handleChange} placeholder="Confirm Password" className="border-b h-12 p-2 border-[#ccc9c9] outline-0" required />
                            
                        
                            <button className="w-full relative group bg-[#DB4444] py-4 flex items-center justify-center  
                             rounded-sm text-[#FAFAFA] text-[16px] font-medium font-poppins cursor-pointer">
                                <span className='z-10 relative'>Create Account</span>
                                <div class="absolute inset-0 bg-[#b82525]   h-0 group-hover:h-full  transition-all duration-300 ease-in-out rounded-sm "></div>
                            </button>
                    
                        </form>
                        <button className="w-full relative group max-w-80 border border-[#DB4444] py-4 flex flex-row gap-4 items-center justify-center rounded-sm text-[#000000]  text-[16px] font-medium font-poppins cursor-pointer"><FaGoogle className="w-6 h-6 text-[#DB4444] group-hover:text-white z-10" /> 
                            <span className='z-10 relative group-hover:text-white'>Sign up with Google</span>
                            <div class="absolute inset-0 bg-[#DB4444] w-0 group-hover:w-full  transition-all duration-300 ease-in-out rounded-sm "></div>
                        </button>

                        <div className="w-full max-w-80 flex flex-row gap-1 justify-center items-center"> 
                            <p className="font-poppins font-regular text-[16px] leading-6 tracking-[0] text-[#424242]">Already have account?</p>
                            <a href='/Login' className=" cursor-pointer font-poppins font-regular text-[16px] leading-6 tracking-[0] text-[#424242] underline underline-offset-4">Login</a>
                        </div>

                    </motion.div>
                </div>
           <div className="flex-1" />
            </div>

            <Footer />

            
        </div>



    )
}

export default SignUp; 