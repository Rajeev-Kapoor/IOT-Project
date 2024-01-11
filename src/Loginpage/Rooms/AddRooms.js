import React, { useState } from 'react'
import * as Yup from'yup'
import {Form, Formik } from 'formik'

import FormikControl  from '../../Container/FormikControl'
import AddSwitches from './AddSwitches'

const AddRooms = () => {
  const [count,setCount]=useState(0)
  const [rooms,setRooms]=useState([])
  const dropdownoptions = [
 
    {key:"select an option" , value:""},
    {key:"option1" , value:"Led Lights"},
    {key:"option2" , value:"Fan"},
    {key:"option3" , value:"Switch Board"}
  ]
 
const initialValues={
    roomName:"",
  }

  const validationSchema =Yup.object({
     roomName:Yup.string().required("Required")
  })

  const onSubmit=(values)=>{
    console.log(values)
    setCount(count+1)

       const newRoom={RoomName:values.roomName,key:count, }
    setRooms((prevRooms)=>[...prevRooms,newRoom])
  }
  
    
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
      {
    formik=>{
      return(
    <>
    <Form>
    <FormikControl control='input' type ='text' label="Room Name" name="roomName" />
    <button type='submit' style={{width:"100px", height:"40px",backgroundColor:"grey"}}  >Press To ADD </button>
</Form>

<div style={{ width:"100%"}} >
        {rooms.map((box) => (
          // Render each box with the color and key
          
          <div className="box" style={{display:"inline-block", backgroundColor: "lightg rey",width:"200px",height:"200px" }} key={box.key}>RoomName : {box.RoomName}
          
          <AddSwitches/>
           
          </div>
            

       
       ))}
      </div>
    
    </>
   ) }}
    </Formik>)
}

export default AddRooms