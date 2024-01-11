import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import MainMenu from'./MainMenu/MainMenu'
import AddRooms from './Loginpage/Rooms/AddRooms';

function App() {
  
  return (
    <>
<MainMenu/>

     <Routes>   
     
     <Route path='/AddRooms' element={<AddRooms/>}/>
    
       </Routes>
  
       </>
)
}

export default App;
