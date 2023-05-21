import React from 'react';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import NavbarHeader from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About/About'
import Home from './Pages/Home/Home';
import Store from './Pages/Store/Store';
import Blog  from './Pages/Blog/Blog'

const App = () => {
  return (
    <div>
    <NavbarHeader/>
   <BrowserRouter><Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes></BrowserRouter>
      
      <Footer/>
    </div>
  )
}

export default App
