import React from 'react'
import * as Yup from 'yup'
import FormikControl from '../../Container/FormikControl'
import { Formik,Form } from 'formik'

const AddSwitches = () => {
    const dropdownoptions = [
 
        {key:"select an option" , value:""},
        {key:"Led Lights" , value:"Led Lights"},
        {key:"Fan" , value:"Fan"},
        {key:"Switch Board" , value:"Switch Board"}
      ]
     
    const initialValues={
        roomName:"",
      }
    
      const validationSchema =Yup.object({
         roomName:Yup.string().required("Required")
      })
    
      const onSubmit=(values)=>{
        // console.log(values)
        // setCount(count+1)
    
        //    const newRoom={RoomName:values.roomName,key:count, }
        // setRooms((prevRooms)=>[...prevRooms,newRoom])
      }
    
  return (
  <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={onSubmit}>{
    formik=>{
    return(<>
    <Form> 
          <div>Add Buttons</div>
          <FormikControl control ='select' type ="text" label="Select Device" name='switch'options ={dropdownoptions}/>
          <button type="submit" style={{backgroundColor:"lightgrey"}}>ADD</button>
          </Form>
    <div>AddSwitches</div>
    </>)}}
    </Formik>
   )
}

export default AddSwitches