import DropDown from '../assets/DropDown.svg'

const Header = () => {
    return (
        <div className="w-full px-6  lg:pl-45 lg:pr-14 xl:pl-90 xl:pr-24 2xl:pl-111 2xl:pr-34 py-3  bg-black ">
            <div className="flex flex-row items-center justify-between lg:justify-center lg:gap-56">
                <div className="flex flex-row gap-2 items-center justify-center">
                    <p className="font-poppins text-[12px] sm:text-sm font-normal leading-5.25 tracking-normal text-[#FAFAFA]">
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </p>
                    <a href="/" className="max-[548px]:hidden font-poppins text-[12px] sm:text-sm font-semibold leading-[24px] text-center underline decoration-solid text-[#FAFAFA]">ShopNow</a>
                </div>

                <div className="max-[490px]:hidden flex flex-row gap-1.25 items-center sm:items-start ">
                    <p className="font-poppins text-[12px] sm:text-sm font-normal leading-5.25 tracking-normal text-[#FAFAFA]">English</p>
                    <img src={DropDown} alt="DropDown" className='w-6 h-6 cursor-pointer'/>
                </div>
          </div>
        </div>
    )
}

export default Header;