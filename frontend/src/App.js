import './App.css';
import Home from './components/Home';
import {Routes,Route} from "react-router-dom"
import Modal from './components/Modal';
import Todolist from './components/Todolist';
import Todoview from './components/Todoview';
import Edittodo from './components/Edittodo';
import Signup from './components/Authentication/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/createyourtodo" element={<Modal/>}></Route>
      <Route path="/todolist" element={<Todolist/>}></Route>
      <Route path="/todoview/:id" element={<Todoview/>}></Route>
      <Route path="/edittodo/:id" element={<Edittodo/>}></Route>
      <Route path="/register" element={<Signup/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      
     </Routes>
  );
}

export default App;
