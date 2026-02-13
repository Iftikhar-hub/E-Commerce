import RightArrow from '../assets/RightArrow.svg'
import heroPicture from '../assets/heroPicture.svg'
import { motion } from 'framer-motion'
import Slider from './Slider'
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();

    const CategoryLinks = [
        { name: "Woman’s Fashion" },
        { name: "Men’s Fashion" },
        { name: "Electronics" },
        { name: "Home & Lifestyle" },
        { name: "Medicine" },
        { name: "Sports & Outdoor" },
        { name: "Baby’s & Toys" },
        { name: "Groceries & Pets" },
        { name: "Health & Beauty" },
    ]

    const handleCategoryClick = (categoryName) => {
        navigate(`/category/${encodeURIComponent(categoryName)}`);
    };

    return (
        <div className="w-full max-w-400 mx-auto flex items-center flex-row gap-11 px-6 lg:px-28 xl:px-37 max-[1220px]:justify-center justify-between mt-4 border-t border-[#d4d2d2] max-[862px]:border-white overflow-x-hidden">
            <div className="w-full max-[1220px]:hidden max-w-200 flex flex-col gap-4 pt-11 border-r border-[#d4d2d2] ">
               
                {CategoryLinks.map((link, index) => (
                    <a key={index} onClick={() => handleCategoryClick(link.name)}
                        className="font-poppins cursor-pointer whitespace-nowrap text-start font-normal leading-6 tracking-normal text-[#000000]">
                        {link.name}</a>))}
            </div>
            <div className="max-[1220px]:mt-11 flex-col items-center w-full max-w-200">
                <Slider className='w-full' />

                <div className='max-[640px]:hidden  hidden max-[1220px]:flex mt-10  items-center gap-6 overflow-x-scroll w-full max-w-400 px-4'>
                   
                    {CategoryLinks.map((link, index) => (
                        <a key={index} onClick={() => handleCategoryClick(link.name)} className="font-poppins font-bold whitespace-nowrap text-start  leading-6 tracking-normal text-[#000000] px-4 py-2 rounded-sm 
                        shadow-[0px_1px_15px_0px_#0000000D]">
                            {link.name}</a>))}




                </div>
            </div>
        </div>
    )
}

export default Hero;