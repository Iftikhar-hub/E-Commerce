import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

const Cart = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Navbar/>
            <div className="w-full max-w-400 px-36 flex items-center justify-center mx-auto mt-20">
                <h1 className='text-[24px] text-amber-800 font-bold'>Your Cart Items is Here</h1>
            </div>
            <div className="flex-1" />
            <Footer />

            
            
    
        </div>
    )
}

export default Cart;