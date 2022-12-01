import React, { useContext } from 'react'  
import Login from './Authentication/Login'; 
import Navbar1 from './Navbars/Navbar1';
import Context from "../Context/context"
import Home from './Home';
import Signup from './Authentication/Signup';
function LandingPage() {
   const {loggedIn,registered}=useContext(Context)
  return (
     <>
     <Navbar1/>
     {
      loggedIn?<Home/>:(registered?<Login/>:<Signup/>) 
     } 
     </>
  )
}

export default LandingPage