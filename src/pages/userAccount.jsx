import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useGetUserDataQuery } from '../services/userApi';
import ProfileUser from "../components/ProfileUser";
import Loader from "../components/Loader";

const ProfileContent = () => {
    return (
        <ProfileUser />
    )
}

const CartContent = () => { 
    return (

        <h2>Cart Details</h2>
    )
    
}
const WishlistContent = () => {
    return (
        <h2>Wishlist Details</h2>
    )
}


const Account = ({ userId }) => {

    const [activeTab, setActiveTab] = useState('profile', 'cart', 'wishlist');
    const { data: userData, isLoading, isError, error } = useGetUserDataQuery(userId);

   
        if (isLoading) return <div class="flex mt-70 justify-center items-center">
            <Loader />
        </div>;
        if (isError) return <div class="flex mt-70 justify-center items-center">
           <p>erro Loading data..</p>
        </div>;
   
    
   
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <ProfileContent />;
            case 'cart':
                return <CartContent />;
            case 'wishlist':
                return <WishlistContent />;
            default:
                return <DefaultContent />;
        }
    };
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar />
            <div className="flex-1">
                <div className=" w-full max-w-400 px-6 lg:px-26 xl:px-36 flex flex-col gap-20 items-end justify-center mx-auto mt-20">
                    <p className="font-poppins font-regular text-[14px] leading-5.25 text-[#DB4444] font-bold"> <span className="text-[#000000]">Wellcome</span> {userData.name}</p>

                    <div className="w-full flex flex-row gap-4 justify-between">
                        <div className="flex flex-col items-start gap-6 h-full ">
                            <button onClick={() => handleTabClick('profile')}
                                className={`${activeTab === "profile" ? "font-poppins font-regular text-[14px] leading-5.25 text-red-800 cursor-pointer font-bold" : "font-poppins font-regular text-[14px] leading-5.25  cursor-pointer font-bold text-[#000000]"}`}>Manage Profile</button>

                            <button onClick={() => handleTabClick('cart')} className={`${activeTab === "cart" ? "font-poppins font-regular text-[14px] leading-5.25 text-red-800 cursor-pointer font-bold" : "font-poppins font-regular text-[14px] leading-5.25  cursor-pointer font-bold text-[#000000]"}`}>My Cart</button>

                            <button onClick={() => handleTabClick('wishlist')} className={`${activeTab === "wishlist" ? "font-poppins font-regular text-[14px] leading-5.25 text-red-800 cursor-pointer font-bold" : "font-poppins font-regular text-[14px] leading-5.25  cursor-pointer font-bold text-[#000000]"}`}>My Wishlist</button>

                        </div>
                        <div className="content-area">
                            {renderContent()}
                        </div>

                    </div>

                </div>

            </div>
            <Footer className="mt-auto" />
        </div>

    )
}

export default Account;