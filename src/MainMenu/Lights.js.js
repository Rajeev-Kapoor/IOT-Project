import mouse from  '../mouse.mp3'
import { useState } from 'react';
import bulb from '../images/bulb.gif'
import lightoff from'../images/lightOff.png'
import cielingfanoff from '../images/cielingfanoff.jpeg'
import ceilingfan from '../images/ceilingfan.gif'
import { updatedata } from '../firebase/firebase';
import writeUserData from '../firebase/firebase';
import 'react-h5-audio-player/lib/styles.css';
import React from 'react'

const Mainmenu = () => {
    const[statuslight,setStatuslight]=useState()
    const[switc,setSwitc]=useState("ON")
    const[statusfan,setStatusfan]=useState()
  
    const handleStatusbulb =()=>{
      setStatuslight(!statuslight)
     setSwitc(statuslight?"ON":"OFF")
    new Audio(mouse).play()   
    
  updatedata("/Room1",'led_status '  ,switc,)
  
  }
    
    const handleStatusfan =()=>{
      setStatusfan(!statusfan)
    new Audio(mouse).play()   
    }
    
    return (
        <div >
<h3 style={{}}>Room Light </h3>

{statuslight&& <img style={{height:"50px" }} src={bulb} alt ="bulb"/>}
      {!statuslight&&<img style={{height:"50px" }} src={lightoff} alt= "lightoff"/>}
<button className ="button1" type="button" style={{color:"white", 
  backgroundColor:statuslight?"red":"#04AA6D",
   textDecoration:"bold",fontSize:"large"}} onClick={handleStatusbulb}>
 {statuslight?"OFF":"ON"}</button>
<h3 style={{}}>Room Fan </h3>

{statusfan&& <img style={{height:"50px" }} src={ceilingfan} alt ="bulb"/>}
      {!statusfan&&<img style={{height:"50px" }} src={cielingfanoff} alt= "lightoff"/>}
<button className ="button1" type="button" style={{color:"white", 
  backgroundColor:statusfan?"red":"#04AA6D",
   textDecoration:"bold",fontSize:"large"}} onClick={handleStatusfan}>
 {statusfan?"OFF":"ON"}</button>

         </div>
  );
}


export default Mainmenu