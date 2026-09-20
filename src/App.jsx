import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'


const App = () => {
  return (
   <BrowserRouter>
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cart" element={<Cart/>}/>
     </Routes>
   </BrowserRouter>
  );
};

export default App
