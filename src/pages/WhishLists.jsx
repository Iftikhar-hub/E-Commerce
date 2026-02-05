
// import Wishlist from '../assets/Wishlist.svg'
import view from '../assets/view.svg'
import delet from '../assets/delet.svg'
import YelowStar from '../assets/YelowStar.svg'
import { ProductIcons } from '../utils/data.js'


import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/footer.jsx";


const WhishList = () => {
    const numberOfIcons = 5;
    const iconsArray = Array.from({ length: numberOfIcons });
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar />
            <div className="w-full px-6 lg:px-26 xl:px-36 max-w-400 border-t mx-auto border-[#ccc9c9] mt-4 pt-20 flex-1">
                <div className=" w-full max-w-400 flex flex-col gap-15">
                    <div className="w-full flex flex-row items-center justify-between">
                        <p className="font-poppins text-2xl font-semibold leading-12 tracking-[0.04em]
                         ">WhishList (4)
                        </p>
                        <button className='px-4  py-2 max-[500px]:hidden border border-[#ccc9c9] rounded-sm cursor-pointer text-center hover:bg-[#DB4444] transition-colors duration-500 ease-in-out hover:text-white'>Move All to Bag</button>
                    </div>

                    <div className='grid grid-cols-2 max-[436px]:grid-cols-1 lg:flex lg:flex-row gap-7.5 w-full max-w-350 overflow-x-scroll'>
                        {ProductIcons.map((icon, index) => (
                            <div className='w-full flex flex-col gap-4 '>
                                < div className='w-full ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex flex-col    
                                              justify-center'>
                                    <div className='flex flex-row justify-between items-start'>
                                        <p></p>
                                        <button className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                            <img src={delet} alt="delet" />
                                        </button>

                                    </div>
                                    <img key={index} src={icon.image} alt="icon" className='w-43 h-38 mx-auto' />
                                    <button className='mt-3 font-medium font-poppins cursor-pointer px-2 py-2 text-[white] text-center w-full bg-[#DB4444] transition-colors duration-600 hover:bg-[#c12424] rounded-sm'>Add To Cart</button>
                                </div>

                                <div className='w-full ProductDetails flex flex-col gap-2'>
                                    <p key={index} className='text-[#000000] font-poppins text-[16px] font-medium leading-6 tracking-[0]'>{icon.name}</p>
                                    <p key={index} className='text-[#DB4444] font-poppins text-[16px] flex flex-row gap-4 font-medium leading-6 tracking-[0]'>{icon.price}
                                        <span key={index} className='text-[#000000] line-through opacity-50'>
                                            {icon.discounted}</span>
                                    </p>


                                </div>
                            </div>
                        ))}
                    </div>
                        <button className='px-4  py-2 hidden max-[500px]:block border border-[#ccc9c9] rounded-sm cursor-pointer text-center hover:bg-[#DB4444] transition-colors duration-500 ease-in-out hover:text-white'>Move All to Bag</button>

                    <div className="w-full flex mt-15 flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-6">
                            <span className="w-5 h-10 bg-[#DB4444] rounded-sm"></span>
                            <p className="font-poppins text-2xl font-semibold leading-12 tracking-[0.04em]
                              ">Just for You</p>

                        </div>
                        <button className='px-4 py-2 max-[500px]:hidden border border-[#ccc9c9] rounded-sm cursor-pointer text-center hover:bg-[#DB4444] transition-colors duration-500 ease-in-out hover:text-white'>See All</button>
                    </div>

                    <div className='grid grid-cols-2 max-[436px]:grid-cols-1 lg:flex lg:flex-row gap-7.5 w-full max-w-350 overflow-x-auto'>
                        {ProductIcons.map((icon, index) => (
                            <div className='w-full  flex flex-col gap-4 '>
                                < div className='w-full ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex flex-col    
                                              justify-center'>
                                    <div className='flex flex-row justify-between items-start'>
                                        <p></p>
                                        <button className=' w-8.5 h-8.5 rounded-full bg-white flex items-center justify-center'>
                                            <img src={view} alt="view" />
                                        </button>

                                    </div>
                                    <img key={index} src={icon.image} alt="icon" className='w-43 h-38 mx-auto' />
                                    <button className='mt-3 font-medium font-poppins cursor-pointer px-2 py-2 text-[white] text-center w-full transition-colors duration-500 hover:bg-[#b35454] bg-[#DB4444] rounded-sm'>Add To Cart</button>
                                </div>

                                <div className='ProductDetails flex flex-col gap-2'>
                                    <p key={index} className='text-[#000000] font-poppins text-[16px] font-medium leading-6 tracking-[0]'>{icon.name}</p>
                                    <p key={index} className='text-[#DB4444] font-poppins text-[16px] flex flex-row gap-4 font-medium leading-6 tracking-[0]'>{icon.price}
                                        <span key={index} className='text-[#000000] line-through opacity-50'>
                                            {icon.discounted}</span>
                                    </p>
                                    <div className="flex flex-row items-center space-x-1">
                                        {iconsArray.map((_, index) => (
                                            <img src={YelowStar} className="h-4 w-4" alt="YelowStar" key={index}>
                                            </img>
                                        ))}
                                        <p className='text-[#000000]'>(88)</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='px-4 py-2 hidden max-[500px]:block border border-[#ccc9c9] rounded-sm cursor-pointer text-center hover:bg-[#DB4444] transition-colors duration-500 ease-in-out hover:text-white'>See All</button>

                </div>
            </div>

            <Footer />


        </div>



    )
}

export default WhishList; 