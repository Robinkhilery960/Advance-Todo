import './App.css';
import LandingPage from './components/LandingPage';
import {Routes,Route} from "react-router-dom"
import Modal from './components/Modal';
import Dashboard from './components/Dashboard';
import Todoview from './components/Todoview';
import Edittodo from './components/Edittodo';
import Signup from './components/Authentication/Signup';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Context from './Context/context';
function App() { 
  const [loggedIn,setLoggedIn]=useState(false) 
 
 
  return (
    <Context.Provider value={{loggedIn,setLoggedIn}}>
     <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/createyourtodo" element={<Modal/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/todoview/:id" element={<Todoview/>}></Route>
      <Route path="/edittodo/:id" element={<Edittodo/>}></Route>
      <Route path="/register" element={<Signup/>}></Route>
      <Route path="/landingpage" element={<Home/>}></Route> 
     </Routes>
     </Context.Provider>
  );
}

export default App;