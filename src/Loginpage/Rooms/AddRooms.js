import React from 'react'
import * as Yup from'yup'
import {Form, Formik } from 'formik'

import FormikControl  from '../../Container/FormikControl'
//import AddSwitches from './AddSwitches'
import {  UpdateroomField } from '../../firebase/firebase'
//import ReadData from '../../firebase/firebase'
const AddRooms = () => {
  const dropdownoptions = [
 
    {key:"select an option" , value:""},
    {key:"ON/OFF" , value:"1"},
    {key:"Slide Switch(Range 0% to 100%)" , value:"2"},
    
  ]
 
const initialValues={
    roomName:"",
    switchName:"",
    typeofSwitch:"" ,
    pin:"",
  }

  const validationSchema =Yup.object({
     roomName:Yup.string().required("Required"),
     switchName:Yup.string().required("Required"),
     pin:Yup.number().required("Required"),
    // typeofSwitch:Yup.string().required("required")
  })

  const onSubmit=(values)=>{
   //const data = ReadData(values.roomName);
  
   const data= UpdateroomField(values.roomName,values.switchName,values.typeofSwitch,values.pin)
   console.log(data,"data")
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
    paddingLeft:"10px",
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
    <div style={{position:"absolute",top:"160px", fontSize:"1.5em",width:"350px"}} >Add Appliances</div>
    <FormikControl control='input' type ='text' label="Room" name="roomName" placeholder="Name of the Room eg Kitchen" dstyle={dstyle}  lstyle={lstyle} fstyle={fstyle}/>
    <FormikControl control='input' type ="text" label= "Appliance" name= "switchName" placeholder="Name of the Device eg. Fan" dstyle={dstyle}  lstyle={lstyle} fstyle={fstyle}/>
    <FormikControl control='select' label='Select Type Of Switch' name = 'typeofSwitch' options={dropdownoptions} dstyle={dstyle} fstyle={fstyle} lstyle={lstyle}/>
<FormikControl control="input" type="text" label="Pin number" name="pin" placeholder="Pin number to handle the device "dstyle={dstyle}  lstyle={lstyle} fstyle={fstyle}/>
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

export default AddRooms