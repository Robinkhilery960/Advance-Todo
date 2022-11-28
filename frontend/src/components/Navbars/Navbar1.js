import React from 'react'
import { Link } from 'react-router-dom' 
import logo from '../Navbars/logo.png'
function Navbar1() {
  return (
    <header className="text-gray-600 body-font  bg-gray-600">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between  ">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Link to="/"> 
      <img src={logo} className='h-16 w-16'  rounded/> 
      </Link>
    </a>
    <nav className=" w-1/2 flex flex-wrap items-center justify-around text-white font-medium">
      <a className="mr-5"> <Link to="#">Contact Us</Link> </a>
      <a className="mr-5"><Link to="#">About Us</Link> </a>
      <a className="mr-5"><Link to="/register">SignUp</Link> </a> 
      <a className="mr-5"><Link to="/">Login</Link> </a> 
    </nav> 
  </div>
</header>
  )
}

export default Navbar1