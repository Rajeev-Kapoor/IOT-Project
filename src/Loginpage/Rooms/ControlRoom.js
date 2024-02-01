import React from 'react';
import { useEffect,useState } from 'react';
import { getDatabase,ref,get, } from 'firebase/database';
import { Form, Formik} from 'formik';
import *as Yup from 'yup'
// import app from '../../firebase/firebase';
import FormikControl from '../../Container/FormikControl';
import TypeofButton from '../../Container/TypeofButton';

const ControlRoom = () => {
const[retData,setRetData]=useState();
const[roomName,setRoomName]=useState();
//const[filterData,setFilterData]=useState()
const[switchBoard,setSwitchBoard]=useState(null)
const[nameSwitch,setNameSwitch] = useState("")
    useEffect(() => {
        const db=getDatabase()
        
        const reference=ref(db,`/`)
      get(reference)
      .then((snapshot) =>{
       const data =snapshot.val();
      setRetData(data);
       // console.log(retData,"dataread")
      })
      },[roomName])

  const initialValues = {
    roomName:"",
    
  }   
 const validationSchema = Yup.object({
roomName : Yup.string().required("required"),
  })

  const onSubmit=(values)=>{
   // console.log(values.roomName,retData,"target")
getData(values);
 }

const getData=(values)=>     {
  const obj=retData
  const filteredKeys = Object.keys(obj).filter(key => key=== values.roomName);
    setRoomName(filteredKeys);
const filteredObj = filteredKeys.reduce((acc, key) => {
acc[key] = obj[key];

return acc;
}, {});
const switchBoard2 =filteredObj[filteredKeys]
console.log(switchBoard2,"switchBoard")

setSwitchBoard(switchBoard2);
// console.log(filteredObj,"filteredObj")

getswitchstatus(switchBoard2);
 
}
const getswitchstatus=(switchBoard2)=>{
  const filteredkeys = Object.keys(switchBoard2);
console.log(filteredkeys,"switchstatus")
setNameSwitch(filteredkeys);
//console.log(retData,switchBoard[nameSwitch[0]].typeofSwitch,"hii am there")
}

const fstyle={
  textAlign:"center"
}

const dstyle={
  display:"flex",
  flexDirection:"column",
  width:"200px",

}
  const lstyle={        
    height:"40px",
    width:"300PX",
    borderRadius:"5PX",
    paddingLeft:"10px",
    color:"#736odf",

}
  return (
<>
<Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={onSubmit}>
  {
    formik=>{
      return(
    <Form 
    //style={{display:"flex",alignItems:"center",flexDirection:"column",width:"98%",textAlign:"center",margin:"10px",height:"120px", backgroundColor:"#f0f0f0" }}
    >
    <FormikControl type ="text" label='Select Room' control='input' name='roomName' 
//    dstyle={dstyle} lstlye={lstyle} fstyle={fstyle}
    /> 
    <button type = "submit" style ={{backgroundColor:"lightgrey",color:"#736odf",border:"4px solid lightgrey", width:"120px",borderRadius:"5px",margin:"10px" ,height:"30px", fontSize:"1em"}}>Submit</button>
    {/* {filterData!==""&&<ControlSwitches data={filterData}/>} */}
      </Form>
      
      )}}

      </Formik>
      {nameSwitch!=="" && nameSwitch.map((item)=><div style={{display:"inline-flex", margin:"10px",width:"300px",height:"100px",backgroundColor:"lightgrey"}}><TypeofButton key={nameSwitch} control={switchBoard[item].typeofSwitch} name={item} roomName={roomName}/>    
      </div>  )
   
      }

    </> 
     )
}


export default ControlRoom