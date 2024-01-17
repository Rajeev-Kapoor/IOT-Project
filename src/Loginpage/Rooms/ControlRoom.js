import React from 'react';
import { useEffect,useState } from 'react';
import { getDatabase,ref,get, } from 'firebase/database';
import app from '../../firebase/firebase';
import FormikControl from '../../Container/FormikControl';
const ControlRoom = () => {
const[retData,setRetData]=useState();
const[roomName,setRoomName]=useState();

    useEffect(() => {
        const db=getDatabase()
        
        const reference=ref(db,`/`)
      get(reference)
      .then((snapshot) =>{
       const data =snapshot.val();
      setRetData(data);
        console.log(retData,"dataread")
      })
      },[roomName])
      
      

  return (
<>
{/* <FormikControl control='select'/> */}
    <div>Select The Room </div>
    <label htmlFor='roomnumber'>Room Number</label>
    <input id='roomnumber' type='text' ></input>
    </> )
}


export default ControlRoom