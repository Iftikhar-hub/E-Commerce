
import './App.css'
import './index.css'

import Header from '../src/components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/products'
// import Category from './components/Category'
import Categor from './components/Categor'
import SellingProducts from './components/SellingProducts'
import OurProducts from './components/OurProducts'
import NewArrival from './components/NewArrival'


function App() {
 

  return (
    <>
      <Header />
      <Navbar/>
      <Hero/>
      <Products/>
      <Categor />
      <SellingProducts />
      <OurProducts />
      <NewArrival/>
      
    </>
  )
}

export default App
