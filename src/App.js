import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './Components/Base';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Services from './Pages/Services';
import { ToastContainer,toast } from 'react-toastify';


function App() {
  return ( 
    <BrowserRouter>
    <ToastContainer position='bottom-center'/>
    <Routes>
    <Route path='/' element={<About/>} />
    <Route path='login' element={<Login/>} />
    <Route path='signup' element={<Signup/>} />
    <Route path='about' element={<About/>} />
    <Route path='home' element={<Home/>} />
    <Route path='services' element={<Services/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
