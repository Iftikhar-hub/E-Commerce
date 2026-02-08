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
import ProductDetails from './pages/productDetails';
import AllProducts from './pages/AllProducts.jsx'
import AllSellingProducts from './pages/AllSellingProducts.jsx'


import { ToastContainer } from 'react-toastify';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      dispatch(loadUserCart());
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
      <Route path="/AllSellingProducts" element={<AllSellingProducts />} />

  
      

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
