
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import heroPicture from '../assets/heroPicture.svg'
import heroaPicture from '../assets/heroaPicture.png'

const Slider = () =>{
    return (
        <>
            <Swiper navigation={true} modules={[Navigation, Autoplay]} loop={true}
                autoplay={{delay: 2200,disableOnInteraction: false,
            }} className="mySwiper w-full">
                <SwiperSlide className='w-full'>
                    <img src={heroPicture} alt="heroPicture" className=' ' /> 
                </SwiperSlide>
                <SwiperSlide className='w-full'>
                    <img src={heroaPicture} alt="heroPicture" className=' ' /> 
                </SwiperSlide>
        </Swiper>
        </>

    )
}

export default Slider;