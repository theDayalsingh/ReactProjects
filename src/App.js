import React from 'react';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import NavbarHeader from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About/About'
import Home from './Pages/Home/Home';
import Store from './Pages/Store/Store';
import Contact from './Pages/Contact/Contact';
import SingleProduct from './Pages/Store/Card/SingleProduct'

const App = () => {
  return (
    <div>
    <NavbarHeader/>
   <BrowserRouter><Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products/:productId" element={<SingleProduct/>}/>
      </Routes></BrowserRouter>
      
      <Footer/>
    </div>
  )
}

export default App
