import React, { useState } from 'react'
import * as Yup from'yup'
import {Form, Formik } from 'formik'

import FormikControl  from '../../Container/FormikControl'
//import AddSwitches from './AddSwitches'
import { Deletedata, updateroomField } from '../../firebase/firebase'
import { connectDatabaseEmulator } from 'firebase/database'
//import ReadData from '../../firebase/firebase'

const RemoveRooms = () => {
  const [count,setCount]=useState(0)
  const [rooms,setRooms]=useState([])
  const dropdownoptions = [
 
    {key:"select an option" , value:""},
    {key:"ON/OFF" , value:"1"},
    {key:"Slide Switch(Range 0% to 100%)" , value:"2"},
    
  ]
 
const initialValues={
    roomName:"",
    switchName:"",
    typeofSwitch:"" 
  }

  const validationSchema =Yup.object({
     roomName:Yup.string().required("Required"),
    //  switchName:Yup.string().required("Required"),
    // typeofSwitch:Yup.string().required("required")
  })

  const onSubmit=(values)=>{
   //const data = ReadData(values.roomName);

Deletedata(values.roomName,values.switchName,values.typeofSwitch)
  console.log(values,"data")
   //updatedata(values.roomName,values.switchName,"ON")
   }
   const dstyle={
    display:"flex",
    flexDirection:"column",
    textAlign:"left",
    margin:"5px",
    width:"250px"
   }
const  lstyle={
    fontSize:"1.2em",
    margin:"3px",
    
   }
   const fstyle={
    height:"30px",
    paddingleft:"10px",
    backgroundColor:"#F0EEE6",
    border:"3px solid grey",
    borderRadius:"5px"
   }

    
  return (
    <div style={{display:"flex",justifyContent:"center",textAlign:"center" ,height:"90vh",backgroundColor:"#F1EAFF" }}>
          
      <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
      {
    formik=>{
      return(
    <>
    <Form style={{ width:"500px",margin:"10px",height:"90%",backgroundColor:"#EEF5FF",boxShadow:"15px 15px grey",padding:"10px", display :"flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <div style={{position:"absolute",top:"160px", fontSize:"1.5em",width:"25%",backgroundColor:"lightgrey"}} >Remove Appliances  From  Rooms</div>
    <FormikControl control='input' type ='text' label="Room Name" name="roomName" dstyle={dstyle}  lstyle={lstyle} fstyle={fstyle}/>
    <FormikControl control='input' type ="text" label= "Switch Name" name= "switchName" dstyle={dstyle}  lstyle={lstyle} fstyle={fstyle}/>
    <FormikControl control='select' label='Select Type Of Switch' name = 'typeofSwitch' options={dropdownoptions} dstyle={dstyle} fstyle={fstyle} lstyle={lstyle}/>
 
    <button type='submit' style={{width:"170px",border:"4px solid lightgrey", borderRadius:"10px"  ,height:"40px",backgroundColor:"lightblue",position:"absolute",bottom:"100px"}}  > Submit </button>
</Form>

{/* <div style={{ width:"100%"}} >
        {rooms.map((box) => (
          // Render each box with the color and key
          
          <div className="box" style={{display:"inline-block", backgroundColor: "lightg rey",width:"200px",height:"200px" }} key={box.key}>RoomName : {box.RoomName}
          
          <AddSwitches/>
           
          </div>
            

       
       ))}
      </div> */}
    
    </>
   ) }}
    </Formik>
    </div>
)
}

export default RemoveRooms