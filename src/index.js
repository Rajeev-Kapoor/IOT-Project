import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Loginpage/Login';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Mainmenu from './MainMenu/Lights.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <Mainmenu/> */}
    <ChakraProvider>
 <BrowserRouter>
 
     <Routes>  
  <Route path='/' element={<Login/>}/>
  <Route path ='/app/*' element={<App/>}/>
  </Routes>
 </BrowserRouter>
 </ChakraProvider>
 
  </React.StrictMode>
);
