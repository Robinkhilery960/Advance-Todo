import React from 'react'
import { Link } from "react-router-dom"; 
import logo from '../assets/logo.png'
function Footer() {
  return (
    <header className="text-gray-600 body-font  bg-gray-600">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center   "> 
    <nav className=" w-full flex flex-wrap items-center justify-around text-white font-medium"> 
      <a className="mr-5"> <Link to="/">Contact Us</Link> </a>
      <a className="mr-5"> <Link to="#">About Us</Link> </a>  
      <a className="mr-5"> <Link to="#">Give Feedback</Link> </a>  
      <img src={logo} className='h-16 w-16'  rounded/> 
    </nav> 
  </div>
</header>
  )
}

export default Footer