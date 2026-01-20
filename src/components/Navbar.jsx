import searchIcon from '../assets/searchIcon.svg';
import Wishlist from '../assets/Wishlist.svg';
import cart from '../assets/cart.svg';
import UserProfile from './userProfile';
import { useGetUserDataQuery } from '../services/userApi';



const Navbar = ({ userId }) => {
    const { data: userData, isLoading, isError, error } = useGetUserDataQuery(userId);

    const navLinks = [
        {name:"Home", href:"/"},
        {name:"Contact", href:"#"},
        {name:"About", href:"#"},
        // {name:"Sign Up", href:"/signup"},
        
    ]


    return(
        <div className="w-full  max-w-400 mx-auto px-26 pt-10">
            <div className="flex flex-row gap-37 w-full  justify-center items-center">
               
                <div className="flex flex-row gap-30 items-center justify-center">
                    <p className="text-[#000000] font-inter text-2xl font-bold leading-6 tracking-[0.03em]
                     ">Exclusive</p>
                    
                    <div className="flex flex-row gap-12 items-center">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className={`text-[#000000] font-poppins text-base font-normal leading-6 tracking-normal text-center
                             ${window.location.pathname === link.href ? "underline underline-offset-5" : ""}`}>
                                {link.name}</a>
       
                        ))}

                        {userData && (
                            <a href="#" className='text-[#000000] font-poppins text-base font-normal leading-6 tracking-normal text-center'>Log Out</a>
                        )}
                        <a href="/signup" className='text-[#000000] font-poppins text-base font-normal leading-6 tracking-normal text-center'>Sign Up</a>
                        

                    </div>

                </div>

                <div className="flex flex-row gap-6 items-center justify-between">
                    <div className="flex flex-row gap-2.5 bg-[#F5F5F5] py-1.75 pl-5 pr-3 rounded-sm ">
                        <input type="text" placeholder="What are you looking for?" className="opacity-50 font-poppins text-xs font-normal leading-4.5 tracking-normal text-[#000000]" />
                        <img src={searchIcon} alt="searchIcon" className='w-6 h-6 cursor-pointer' />

                    </div>

                    <div className='flex flex-row gap-4'>
                        <a href='/WhishLists' className='cursor-pointer'>
                            {/* <span className='w-2 rounded-full bg-amber-900 text-white'>3</span> */}
                            <img src={Wishlist} alt="Wishlist" className='w-8 h-8' />
                        </a>
                        <a href='/Cart' className='cursor-pointer'>
                            <img src={cart} alt="cart" className='w-8 h-8'/>
                        </a>
                    </div>

                </div>

                <UserProfile />

            </div>

        </div>
    )
}

export default Navbar;