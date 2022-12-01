import React, { useContext } from 'react'
import Footer from './Footer'
import Navbar2 from './Navbars/Navbar2'
import Herosection from "./Herosection" 
import Navbar1 from './Navbars/Navbar1'
function Home() { 
  return (
    <> 
    <Navbar1/>
    <Herosection/>
    <Footer/>
    </>
  )
}

export default Home