import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Products from './component/Products';
import Contact from './component/Contact';
import Error from './component/Error';
import List from './component/List';
import Footer from "./component/Footer";

const App=()=>{
    return(        
    <BrowserRouter>
        <List/>

        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route  path="/services" element={<Services/>}/>
            <Route  path="/product" element={<Products/>}/>
            <Route  path="/contact" element={<Contact/>}/>
            <Route  element={<Error/>}/>
            

        </Routes>

      <Footer />
        </BrowserRouter>
          

     
    )

}
export default App;