import DropDown from '../assets/DropDown.svg'

const Header = () => {
    return (
        <div className="w-full pl-111 pr-34 py-3  bg-black flex items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-56">
                <div className="flex flex-row gap-2 items-center justify-center">
                    <p className="font-poppins text-sm font-normal leading-5.25 tracking-normal text-[#FAFAFA]">
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </p>
                    <a href="/" className="font-poppins text-sm font-semibold leading-[24px] text-center underline decoration-solid text-[#FAFAFA]">ShopNow</a>
                </div>

                <div className="flex flex-row gap-1.25 ">
                    <p className="font-poppins text-sm font-normal leading-5.25 tracking-normal text-[#FAFAFA]">English</p>
                    <img src={DropDown} alt="DropDown" className='w-6 h-6 cursor-pointer'/>
                </div>
          </div>
        </div>
    )
}

export default Header;