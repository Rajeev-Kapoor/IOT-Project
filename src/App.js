import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import MainMenu from'./MainMenu/MainMenu'
import AddRooms from './Loginpage/Rooms/AddRooms';
import RemoveRooms from './Loginpage/Rooms/RemoveRooms';
import ControlRoom from './Loginpage/Rooms/ControlRoom';

function App() {
  
  return (
    <>
<MainMenu/>

     <Routes>   
     
     <Route path='/AddRooms' element={<AddRooms/>}/>
     <Route path='/RemoveRooms' element={<RemoveRooms/>}/>
    <Route path="/ControlRooms" element={<ControlRoom/>}/>
       </Routes>
  
       </>
)
}

export default App;
