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





function App() {


  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/WhishLists' element={<WhishLists />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/CheckOut' element={<CheckOut />}/>
      <Route path='/Admin' element={<Admin />}/>
      

   </Routes>
  )
}

export default App
