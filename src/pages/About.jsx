import Footer from "../components/footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About1 from "../assets/About1.png"
import Services from "../assets/About/Services.png"
import Services1 from "../assets/About/Services1.png"
import Services2 from "../assets/About/Services2.png"


const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar />
            <div className="flex-1 mt-35.75 px-6 lg:px-26 xl:px-36 mx-auto">
                <div className="w-full  flex flex-row items-center gap-18.75 justify-between ">
                    <div className="w-full flex flex-col items-start gap-10">
                        <p className="font-inter font-semibold text-black text-[54px] leading-16 tracking-[6%]">Our Story</p>
                        <div className="flex flex-col gap-6">
                            <p className="font-poppins font-normal text-[16px] leading-6.5 text-black">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                            <p className="font-poppins font-normal text-[16px] leading-6.5 text-black">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer. </p>
                        </div>

                    </div>

                    <div>
                        <img src={About1} alt="Side Image" />
                    </div>

                </div>

                <div className="w-full flex flex-row mt-35 items-center justify-between">

                    <div className="w-full max-w-67.5 border border-[#0000004D] py-7 flex flex-col items-center gap-6 justify-center rounded-sm">
                        <img src={Services} alt="Middle Picture" />
                        <div className="flex flex-col gap-3 items-center">
                            <p className="font-inter font-bold text-black text-[32px] leading-7.5 tracking-[4%]">10.5k </p>
                            <p className="font-inter font-normal text-black text-[16px] leading-6">
                                Sallers active our site
                            </p>

                        </div>

                    </div>
                    <div className="w-full max-w-67.5 border border-[#0000004D] py-7 flex flex-col items-center gap-6 justify-center rounded-sm">
                        <img src={Services1} alt="Middle Picture" />
                        <div className="flex flex-col gap-3 items-center">
                            <p className="font-inter font-bold text-black text-[32px] leading-7.5 tracking-[4%]">33k </p>
                            <p className="font-inter font-normal text-black text-[16px] leading-6">
                                Mopnthly Produduct Sale
                            </p>

                        </div>

                    </div>
                    <div className="w-full max-w-67.5 border border-[#0000004D] py-7 flex flex-col items-center gap-6 justify-center rounded-sm">
                        <img src={Services} alt="Middle Picture" />
                        <div className="flex flex-col gap-3 items-center">
                            <p className="font-inter font-bold text-black text-[32px] leading-7.5 tracking-[4%]">45.5k </p>
                            <p className="font-inter font-normal text-black text-[16px] leading-6">
                                Customer active in our site
                            </p>

                        </div>

                    </div>
                    <div className="w-full max-w-67.5 border border-[#0000004D] py-7 flex flex-col items-center gap-6 justify-center rounded-sm">
                        <img src={Services2} alt="Middle Picture" />
                        <div className="flex flex-col gap-3 items-center">
                            <p className="font-inter font-bold text-black text-[32px] leading-7.5 tracking-[4%]">25k </p>
                            <p className="font-inter font-normal text-black text-[16px] leading-6">
                                Anual gross sale in our site
                            </p>

                        </div>

                    </div>

                </div>

            </div>



            <Footer />

        </div>

    )
}

export default About;