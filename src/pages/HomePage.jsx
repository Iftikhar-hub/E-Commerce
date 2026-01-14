import Categor from "../components/Categor"
import Footer from "../components/footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import NewArrival from "../components/NewArrival"
import OurProducts from "../components/OurProducts"
import Products from "../components/products"
import SellingProducts from "../components/SellingProducts"

function HomePage() {


    return (
        <>
            <Header />
            <Navbar />
            <Hero />
            <Products />
            <Categor />
            <SellingProducts />
            <OurProducts />
            <NewArrival />
            <Footer />

        </>
    )
}

export default HomePage
