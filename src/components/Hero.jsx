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
        <div className="w-full max-w-400 mx-auto flex items-center flex-row gap-11 px-37 justify-center mt-4 border-t border-[#d4d2d2] overflow-x-hidden">
            <div className="flex flex-col gap-4 pt-11 border-r border-[#d4d2d2] ">
                <div className="flex flex-row gap-9  items-center justify-between ">
                    <a href="#" className="font-poppins text-base font-normal leading-6 tracking-normal text-center text-[#000000]">Woman’s Fashion</a>
                    <img src={RightArrow} alt="RightArrow" className='w-6 h-6'/>
                </div>
                <div className="flex flex-row gap-9  items-center justify-between ">
                    <a href="#" className="font-poppins text-base font-normal leading-6 tracking-normal text-center text-[#000000]">Men’s Fashion</a>
                    <img src={RightArrow} alt="RightArrow" className='w-6 h-6'/>
                </div>
                 {CategoryLinks.map((link, index) => (
                  <a key={index} href={link.href} className="font-poppins text-start font-normal leading-6 tracking-normal text-[#000000]">
                        {link.name}</a>))}
            </div>
            <div className=" w-full max-w-200">
                <Slider className='w-full'/>
            </div>
        </div>
    )
}

export default Hero;