import PowerBank from '../assets/newArrival/PowerBank.png'
import women from '../assets/newArrival/women.png'
import amazonEcho from '../assets/newArrival/amazonEcho.png'
import gocci from '../assets/newArrival/gocci.png'
import Services from '../assets/Services.png'

const NewArrival = () => {
    return (
        <div className="w-full max-w-400 px-36  mx-auto mt-20 ">
            <div className=" flex flex-col items-center gap-15 py-2 ">
                <div className=" w-full flex flex-row justify-between items-baseline-last 
                                  gap-117.5">
                    <div className="flex flex-row items-baseline-last gap-21.75">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-row items-center gap-6">
                                <span className="w-5 h-10 bg-[#DB4444] rounded-sm"></span>
                                <p className="font-poppins text-base text-4 font-semibold leading-5 tracking-normal text-[#DB4444] ">Featured</p>

                            </div>
                            <p className="font-inter text-4xl font-semibold leading-12 tracking-[0.04em] text-[#000000]">New Arrival</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <div className="relative bg-[#000000] pt-22.25 px-7 rounded-sm w-142.5 h-150">
                        <img src={PowerBank} alt="PowerBank" />
                        <div className=' absolute top-110 flex flex-col gap-4'>
                            <p className='font-inter text-[24px] font-semibold leading-6 tracking-[0.03em] 
                             text-[#FAFAFA]'>PlayStation 5</p>
                            <p className='font-inter text-[14px] font-regular leading-6 tracking-[0.03em] 
                             text-[#FAFAFA]'>Black and White version of the PS5 <br /> coming out on sale.</p>
                            <a href="#" className='font-inter underline-offset-3 underline text-[14px] font-semibold leading-6 tracking-[0.03em] 
                             text-[#FAFAFA]'>Shop Now</a>


                        </div>
                    </div>

                    <div className="flex flex-col gap-8 rounded-sm w-142.5 h-150">
                        <div className='relative bg-[#000000] rounded-sm w-full h-71 flex items-end justify-end'>
                            <img src={women} alt="women" />
                            <div className=' absolute bottom-6 left-6 flex flex-col gap-4'>
                                <p className='font-inter text-[24px] font-semibold leading-6 tracking-[0.03em] text-[#FAFAFA]'>Women’s Collections</p>
                                <p className='font-inter text-[14px] font-regular leading-6 tracking-[0.03em] 
                              text-[#FAFAFA]'>Featured woman collections that <br /> give you another vibe.</p>
                              <a href="#" className='font-inter underline-offset-3 underline text-[14px] font-semibold leading-6 tracking-[0.03em] 
                             text-[#FAFAFA]'>Shop Now</a>
                            </div>
                        </div>

                        <div className='flex flex-row gap-7.5 w-full h-71'>
                            <div className='relative bg-[#000000] flex items-center justify-center rounded-sm w-67.5'>
                                <img src={amazonEcho} alt="amazonEcho" />
                                <div className=' absolute bottom-6 left-6 flex flex-col gap-1'>
                                    <p className='font-inter text-[24px] font-semibold leading-6 tracking-[0.03em] text-[#FAFAFA]'>Speakers</p>
                                    <p className='font-inter text-[14px] font-regular leading-6 tracking-[0.03em] 
                                     text-[#FAFAFA]'>Amazon wireless speakers</p>
                                    <a href="#" className='font-inter underline-offset-3 underline text-[14px] font-semibold leading-6 tracking-[0.03em] 
                                    text-[#FAFAFA]'>Shop Now</a>
                                 </div>
                                
                            </div>
                            <div className='relative bg-[#000000] flex items-center justify-center rounded-sm w-67.5'>
                                <img src={gocci} alt="gocci" />
                                <div className=' absolute bottom-6 left-6 flex flex-col gap-1'>
                                    <p className='font-inter text-[24px] font-semibold leading-6 tracking-[0.03em] text-[#FAFAFA]'>Perfume</p>
                                    <p className='font-inter text-[14px] font-regular leading-6 tracking-[0.03em] 
                                     text-[#FAFAFA]'>GUCCI INTENSE OUD EDP</p>
                                    <a href="#" className='font-inter underline-offset-3 underline text-[14px] font-semibold leading-6 tracking-[0.03em] 
                                    text-[#FAFAFA]'>Shop Now</a>
                                 </div>
                                
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex flex-row justify-center items-center gap-22'>
                    <div className='flex flex-col items-center gap-6'>
                        <img src={Services} alt="Services" className='w-20 h-20' />
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='font-poppins text-[20px] font-semibold text-[#000000] leading-7 tracking-[0]'>FREE AND FAST DELIVERY</p>
                            <p className='font-poppins text-[14px] normal text-[#000000] leading-7 tracking-[0]'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-6'>
                        <img src={Services} alt="Services" className='w-20 h-20' />
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='font-poppins text-[20px] font-semibold text-[#000000] leading-7 tracking-[0]'>FREE AND FAST DELIVERY</p>
                            <p className='font-poppins text-[14px] normal text-[#000000] leading-7 tracking-[0]'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-6'>
                        <img src={Services} alt="Services" className='w-20 h-20' />
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='font-poppins text-[20px] font-semibold text-[#000000] leading-7 tracking-[0]'>FREE AND FAST DELIVERY</p>
                            <p className='font-poppins text-[14px] normal text-[#000000] leading-7 tracking-[0]'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default NewArrival;