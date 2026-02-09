import iconSend from '../assets/iconSend.svg'
import scanner from '../assets/scanner.png'
import { socialMediaIcons } from '../utils/data.js'
// import { FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        
        <footer className=" w-full px-6 lg:px-26 xl:px-36 pt-20 items-center justify-center flex flex-col  mx-auto mt-25 bg-[#000000]  pb-5">
            <div className="flex flex-wrap gap-21.75">
                <div className="flex flex-col gap-4">
                    <p className="text-[#FAFAFA] font-inter text-[24px] font-bold leading-6 tracking-[0.03em]">Exclusive

                    </p>
                    <a href="#" className="font-poppins text-[#FAFAFA] text-[20px] font-medium leading-7
                    tracking-0">Subscribe</a>
                    <a href="#" className="font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6
                    tracking-0">Get 10% off your first order</a>
                    <div className='flex flex-row gap-8 border border-[#FAFAFA] py-3 pl-4 pr-2 items-center rounded-sm'>
                        <input className='text-[#FAFAFA] outline-0' type="text" placeholder='Enter Your Email' />
                        <img src={iconSend} alt="iconSend" className='cursor-pointer' />
                    </div>

                    
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-[#FAFAFA] font-inter text-[24px] font-bold leading-6 tracking-[0.03em]">Support

                    </p>
                    <p href="#" className=" font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6
                    tracking-0">111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</p>
                    <p href="#" className=" font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6
                    tracking-0">exclusive@gmail.com</p>
                    <p href="#" className=" font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6
                    tracking-0">+88015-88888-9999</p>
                   
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-[#FAFAFA] font-inter text-[24px] font-bold leading-6 tracking-[0.03em]">Account

                    </p>
                    <a href="/signup" className="font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6 tracking-0">My Account</a>
                    <a href="/signup" className="font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6 tracking-0">Login / Register</a>
                    <a href="/Cart" className="font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6 tracking-0">Cart</a>
                    <a href="/WhishLists" className="font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6 tracking-0">Wishlist</a>
                    <a href="#" className="font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6 tracking-0">Shop</a>
                   
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-[#FAFAFA] font-inter text-[24px] font-bold leading-6 tracking-[0.03em]">Quick Link

                    </p>
                    <a href="#" className="font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6 tracking-0">Privacy Policy</a>
                    <a href="#" className="font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6 tracking-0">Terms Of Use</a>
                    <a href="#" className="font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6 tracking-0">FAQ</a>
                    <a href="#" className="font-poppins text-[#FAFAFA] text-[16px] font-normal font-regular leading-6 tracking-0">Contact</a>
                   
                   
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-[#FAFAFA] font-inter text-[24px] font-bold leading-6 tracking-[0.03em]">Download App

                    </p>
                   
                    
                    <div className='flex flex-col'>
                        <a href="#" className="font-poppins text-[#FAFAFA] text-[12px] font-medium font-regular leading-6
                       tracking-0">Save $3 with App New User Only</a>
                        <img src={scanner} alt="iconSend" />
                        
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        {socialMediaIcons.map((Icons, index) => (
                            <Icons key={index} className="text-white cursor-pointer w-6 h-6 hover:rotate-360 transition-all duration-500 ease-in-out" />
                        ))

                        }
                    </div>
                </div>

            </div>

            <div className='w-full border-t pt-4 border-[#151515] mt-8'>
                <p className='font-poppins text-[16px] font-normal font-regular leading-6
                    tracking-0 text-center text-[#F9F9F933]'>Copyright Rimel 2022. All right reserved</p>
            </div>

        </footer>

    )
}
export default Footer;