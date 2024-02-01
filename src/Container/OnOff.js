import React, { useState } from 'react'
import { updatedata } from '../firebase/firebase'
const OnOff = (props) => {
const{name,roomName}=props
  console.log(props,"props")
const [status,SetStatus]=useState('true');
const handleStatusButton=()=>{
    SetStatus(!status)
    updatedata(roomName,name,status)
}
  return (
<>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}>
    <label style={{}}>{name}</label>
    <button  type="button" style={{color:"white", 
    backgroundColor:status?"red":"#04AA6D",
    textDecoration:"bold",fontSize:"large", width:"150px",margin:"10px"}} onClick={handleStatusButton}>{status?"OFF":"ON"}</button>
 </div>
 </> )
}

export default OnOff