import RightArrow from '../assets/RightArrow.svg'
import heroPicture from '../assets/heroPicture.svg'
import { motion } from 'framer-motion'
import Slider from './Slider'

const Hero = () => {

     const CategoryLinks = [
        {name:"Electronics", href:"#"},
        {name:"Electronics", href:"#"},
        {name:"Home & Lifestyle", href:"#"},
        {name:"Medicine", href:"#"},
        {name:"Sports & Outdoor", href:"#"},
        {name:"Baby’s & Toys", href:"#"},
        {name:"Groceries & Pets", href:"#"},
        {name:"Health & Beauty", href:"#"},
    ]
   
    return (
        <div className="w-full max-w-400 mx-auto flex items-center flex-row gap-11 px-6 lg:px-28 xl:px-37 max-[1220px]:justify-center justify-between mt-4 border-t border-[#d4d2d2] max-[862px]:border-white overflow-x-hidden">
            <div className="w-full max-[1220px]:hidden max-w-200 flex flex-col gap-4 pt-11 border-r border-[#d4d2d2] ">
                <div className="flex flex-row max-[1330px]:gap-0 gap-9  items-center justify-between ">
                    <a href="#" className="font-poppins whitespace-nowrap text-base font-normal leading-6 tracking-normal text-center text-[#000000]">Woman’s Fashion</a>
                   
                </div>
                <div className="flex flex-row max-[1330px]:gap-0 gap-9  items-center justify-between ">
                    <a href="#" className="font-poppins whitespace-nowrap text-base font-normal leading-6 tracking-normal text-center text-[#000000]">Men’s Fashion</a>
                    
                </div>
                 {CategoryLinks.map((link, index) => (
                     <a key={index} href={link.href} className="font-poppins whitespace-nowrap text-start font-normal leading-6 tracking-normal text-[#000000]">
                        {link.name}</a>))}
            </div>
            <div className="max-[1220px]:mt-11 flex flex-col items-center w-full max-w-200">
                <Slider className='w-full' />

                <div className='max-[640px]:hidden  max-[1220px]:grid hidden gap-2 sm:gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6  w-full max-w-400 px-4'>
                    <a href="#" className="font-poppins font-bold whitespace-nowrap text-start  leading-6 tracking-normal text-[#000000]">
                        Women's Fashion
                    </a>
                    <a href="#" className="font-poppins font-bold whitespace-nowrap text-start  leading-6 tracking-normal text-[#000000]">
                        Men's Fashion
                    </a>
                    {CategoryLinks.map((link, index) => (
                        <a key={index} href={link.href} className="font-poppins font-bold whitespace-nowrap text-start  leading-6 tracking-normal text-[#000000]">
                            {link.name}</a>))}
                  
                   
                    

                </div>
            </div>
        </div>
    )
}

export default Hero;