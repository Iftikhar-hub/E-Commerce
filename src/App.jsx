import './App.css'
import './index.css'

import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import WhishLists from './pages/WhishLists'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Admin from './pages/admin'
import Success from './components/succeed.jsx'

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUserCart } from "./services/adToCart";
import { loadUserWishlist } from "./services/adToWishlist";
import ProductDetails from './pages/productDetails';
import AllProducts from './pages/AllProducts.jsx'
import AllSellingProducts from './pages/AllSellingProducts.jsx'


import { ToastContainer } from 'react-toastify';
import AllProductCategory from "./pages/AllProductCategory";
import Contact from './pages/Contact.jsx'
import Search from './pages/Search.jsx'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      dispatch(loadUserCart());
      dispatch(loadUserWishlist());
    }
    
  }, []);


  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/WhishLists' element={<WhishLists />} />
      <Route path='/Cart' element={<Cart />} />
      
      <Route path='/CheckOut' element={<CheckOut />}/>
      <Route path='/Admin' element={<Admin />} />

      <Route path='/success' element={<Success />} />
      {/* <Route path='/ProductDetails/:id' element={<ProductDetails />} /> */}
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/AllProducts" element={<AllProducts />} />
      <Route path="/Contact" element={<Contact />} />
        <Route path="/AllSellingProducts" element={<AllSellingProducts />} />
        <Route path="/category/:category" element={<AllProductCategory />} />
        <Route path="/search" element={<Search />} />


  
      

    </Routes>
    <div>
      
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </div>
    </>
    
  )
}

export default App
