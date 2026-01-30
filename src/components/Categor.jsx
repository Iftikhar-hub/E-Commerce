import iconsleft from '../assets/iconsleft.svg'
import iconsright from '../assets/iconsright.svg'
import {motion} from 'framer-motion'

import { categoryItems } from '../utils/data.js'
const Categor = () => {
    return (
        <div className="w-full max-w-400 px-36  mx-auto mt-15">
            <div className=" flex flex-col gap-15 py-20 border-t border-b border-[#d4d2d2]">
                <div className=" w-full flex flex-row justify-between items-baseline-last 
                  gap-117.5">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ amount: 0.1 }}
                        className="flex flex-row items-baseline-last gap-21.75">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-row items-center gap-6">
                                <span className="w-5 h-10 bg-[#DB4444] rounded-sm"></span>
                                <p className="font-poppins text-base text-4 font-semibold leading-5 tracking-normal
                                              text-[#DB4444] ">Categories</p>

                            </div>
                            <p className="font-inter text-4xl font-semibold leading-12 tracking-[0.04em]
                            text-[#000000]">Browse By Category</p>
                      </div>  
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ amount: 0.1 }}
                        className='flex flex-row gap-2'>
                        <div className='w-11.5 h-11.5 flex items-center justify-center rounded-full bg-[#F5F5F5] '>
                            <img src={iconsleft} alt="iconsleft" />
                        </div>
                        <div className='w-11.5 h-11.5 flex items-center justify-center rounded-full bg-[#F5F5F5] '>
                            <img src={iconsright} alt="iconsright" />
                        </div>

                    </motion.div>

                </div>
                <div className='flex flex-row justify-between items-center'>

                    {categoryItems.map((category, index) => (
                        <div key={category.name?? index} className='w-42.5 h-36.25 flex flex-col items-center justify-center gap-4 rounded-sm border border-[#d4d2d2]'>
                            <motion.img
                                initial={{ opacity: 0}}
                                whileInView={{ opacity: 1, rotate: 360 , y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ amount: 0.1 }}
                                
                                src={category.categoryImage} alt="category" className='w-14 h-14' />
                            <p className='text-black'>{ category.categoryName}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categor;