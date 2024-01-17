import React from 'react'
import { useNavigate } from 'react-router-dom'
import *as Yup from 'yup'
import {Form ,Formik} from 'formik'
import  logo from '../images/logo.jpeg'
import FormikControl from '../Container/FormikControl'


const Login = () => {

  const navigate = useNavigate();
// Page  Field style
    const dstyle={
        display:"flex",
        flexDirection:"column",
    }
    const lstyle={
        fontSize:"1.5em",
        margin:"25px 5PX 5PX ",
        color:"#736odf",
    }
    const fstyle={
        borderRadius:"2px",
        height:"40px",
        width:"300PX",
        borderRadius:"5PX",
        paddingLeft:"10px",
        color:"#736odf",
    }

const initialValues = {
    loginId:"",
    password:"",
}

const validationSchema = Yup.object({
    loginId: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
})


const onSubmit=(values)=>{
    if (values.loginId==="admin"&& values.password==="admin123"){ 
navigate('/App');
    console.log(values)

}}

  return (  

<Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={onSubmit}>
    {
        formik=>{
return(<>
    <div style ={{display:"flex",backgroundColor:"#F1EAFF",height:"100vh", justifyContent:"center",alignItems:"center"}}>
<div style ={{width:"35%",height:"85%", background:"#f0f0f0",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column"}}>
 <img src = {logo}  style={{width:"60px"}} alt="img"/> 
 <span>Smart Homes </span>

    <span style={{textAlign:"center",width:"100%",color:"grey",fontSize:"2em"}}>    DRMZ System Innovations Pvt Ltd
</span>   
</div>
<div style ={{width:"35%",height:"85%",backgroundColor:"#b6bbc4"}}>
    
 <Form style ={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"500px"}}>
<FormikControl control='input' type="text" label= "USER ID" name="loginId" dstyle={dstyle} lstyle={lstyle} fstyle={fstyle}/>
<FormikControl control='input' type="text" label="PASSWORD" name="password" dstyle={dstyle} lstyle={lstyle} fstyle={fstyle}/>
<button type = "submit" style ={{backgroundColor:"lightblue",color:"#736odf",border:"4px solid lightgrey", width:"120px",borderRadius:"5px",position:"absolute", bottom:"200px", height:"30px", fontSize:"1em"}}>Submit</button>
{/* {valid&&<App/>} */}
</Form> 
    </div>    
     </div>
</>
       ) }}
</Formik>
    )
}

export default Login