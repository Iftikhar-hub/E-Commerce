import Wishlist from '../assets/Wishlist.svg'
import view from '../assets/view.svg'
import YelowStar from '../assets/YelowStar.svg'

import heroaPicture from '../assets/heroaPicture.png'

import {sellingItems} from '../utils/data.js'

const SellingProducts = () => {

    const numberOfIcons = 5;
    const iconsArray = Array.from({ length: numberOfIcons });
    return (
        <div className="w-full max-w-400 px-36  mx-auto">
            <div className=" flex flex-col gap-15 py-20 ">
                <div className=" w-full flex flex-row justify-between items-baseline-last 
                          gap-117.5">
                    <div className="flex flex-row items-baseline-last gap-21.75">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-row items-center gap-6">
                                <span className="w-5 h-10 bg-[#DB4444] rounded-sm"></span>
                                <p className="font-poppins text-base text-4 font-semibold leading-5 tracking-normal text-[#DB4444] ">This Month</p>

                            </div>
                            <p className="font-inter text-4xl font-semibold leading-12 tracking-[0.04em]
                                    text-[#000000]">Best Selling Products</p>
                        </div>
                    </div>

                    <div className='flex flex-row gap-2'>
                        <button className='w-39.75 h-14 whitespace-nowrap bg-[#DB4444] py-4 px-12 flex items-center justify-center text-[white] rounded-sm font-poppins font-bold cursor-pointer text-[16px]'>View All</button>
                    </div>

                </div>

                <div className='flex flex-row gap-7.5 justify-between items-center w-full max-w-350 overflow-x-auto'>
                    {sellingItems.map((sellingIcon, index) => (
                        <div key={index} className='w-full max-w-67.5 flex flex-col gap-4 '>
                            < div className='ProductImage bg-[#F5F5F5] rounded-sm py-3 px-3 flex  
                             flex-col justify-center'>
                                <div className='flex flex-row justify-between items-start'>
                                    <div></div>
                                    <div className='flex flex-col gap-2'>
                                        <button className='cursor-pointer w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white'>
                                            <img src={Wishlist} alt="Wishlist" />
                                        </button>
                                        <button className=' w-8.5 h-8.5 rounded-full bg-white flex items-center justify-center'>
                                            <img src={view} alt="view" />
                                        </button>
                                    </div>
                                </div>
                                <img src={sellingIcon.sellingImage} alt="sellingIcon" className='w-43 h-38 mx-auto' />
                            </div>

                            <div className='ProductDetails flex flex-col gap-2'>
                                <p className='text-[#000000] font-poppins text-[16px] font-medium leading-6 tracking-[0]'>{sellingIcon.sellingName}</p>
                                <p className='text-[#DB4444] font-poppins text-[16px] flex flex-row gap-4 font-medium leading-6 tracking-[0]'>{sellingIcon.sellingPrice}
                                    <span className='text-[#000000] line-through opacity-50'>
                                        {sellingIcon.sellingDiscounted}</span>
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
                <img src={heroaPicture} alt="heroaPicture" />

            </div>
        </div>

    )
}
export default SellingProducts;