
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import hide from '../assets/hide.png'
import visible from '../assets/visible.png'

import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

import signupImage from '../assets/signupImage.png'
import { motion } from "framer-motion"
import { useDispatch } from "react-redux";
import { loadUserCart } from "../services/adToCart";
import { BASE_URL } from "../utils/data";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [loginForm, setloginForm] = useState({
        email: "", password: ""
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

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
        setloginForm({ ...loginForm, [e.target.name]: e.target.value });
        
    };
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/api/user/user-login`, loginForm, { withCredentials: true });
            localStorage.setItem('isAuth', 'true');

            const userId = res.data.id;
            localStorage.setItem("userId", userId);

            dispatch(loadUserCart());
           

           
            toast.success(res.data.msg, {
                position: 'top-right',
                autoClose: 3000,
            });
            navigate('/')
          
            
        } catch (err) {
       
            toast.error(err.response?.data?.msg || "Something Wrong, Please try again", {
                position: 'top-right',
            });
            
        }
        
    }


    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />
            <div className="w-full  px-6 lg:px-26 xl:px-36 max-w-400 border-t mx-auto border-[#ccc9c9] mt-4 flex-1">
                <div className="flex flex-row items-center justify-between gap-32.25 mt-15">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ amount: 0.1 }}
                        className="w-full max-w-201.25 rounded-sm h-70 lg:h-120 xl:h-195.25 max-[800px]:hidden bg-[#CBE4E8]">
                        <img src={signupImage} alt="signupImage" className=" w-229.75" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ amount: 0.1 }}
                        className="w-full max-w-92.75 sm:items-center flex flex-col gap-8">
                        <div className="flex flex-col gap-4 items-start">
                            <p className="font-inter font-medium text-[28px] sm:text-[36px] leading-7.5 tracking-[4%] text-[#000000]">Log in to Exclusive</p>
                            <p className="font-inter font-regular text-[14px] sm:text-[16px] leading-6 tracking-[0] text-[#000000]">Enter your details below</p>
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

                        <form onSubmit={handleSubmit} className="w-full max-w-80 flex flex-col gap-4">
                            <input type="email" name="email" onChange={handleChange} value={loginForm.email} placeholder="tester@gmail.com" className="border-b h-12 p-2 border-[#ccc9c9] outline-0" required />
                             
                            <div className="w-full flex flex-row justify-between">
                                <input type={type} name="password" onChange={handleChange}
                                    value={loginForm.password} placeholder="tester1234" className="border-b h-12 p-2 border-[#ccc9c9] outline-0 w-full" required />
                                <span className="flex justify-around items-center" onClick={handleToggle}>
                                    <img src={icon} alt="PNG" className="w-5 h-5 cursor-pointer" />
                                </span>
                            </div>
                            
                            

                            <div className="w-full max-w-80 flex flex-row gap-1 justify-between items-center">
                                <button className="bg-[#DB4444] relative group px-6 py-2 flex flex-row gap-4 items-center justify-center rounded-sm text-[#FAFAFA]  text-[16px] font-medium font-poppins cursor-pointer"> 
                                    <span className='z-10 relative'>Login</span>
                                    <div class="absolute inset-0 bg-[#b82525]   h-0 group-hover:h-full  transition-all duration-300 ease-in-out rounded-sm "></div>
                                </button>

                                <a href='#' className=" cursor-pointer font-poppins font-regular text-[16px] leading-6 tracking-[0] text-[#DB4444]">Forget Password?</a>
                            </div>

                        </form>
                       

                       

                    </motion.div>
                    <ToastContainer position="top-right"
                        autoClose={5000} />
                </div>
                <div className="flex-1" />
            </div>

            <Footer />


        </div>



    )
}

export default Login; 