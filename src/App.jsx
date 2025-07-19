import Navbar from '../Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Pages/About'
import Footer from '../Components/Footer'
import Contact from '../Pages/Contact'
import Gallery from '../Pages/Gallery'
import ScrollTop from '../Components/ScrollTop'
import RazorpayReact from '../Components/RazorpayReact'
import CalendarPicker  from '../Components/CalendarPicker'
import Consultation from '../Components/Consultation'
import React from 'react'



function App(){
    
    return(
        
         <>
        <ScrollTop />
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/consultation' element={<Consultation />} />
        </Routes>
      
        <Footer />
        </>
        
    )
}
export default App;