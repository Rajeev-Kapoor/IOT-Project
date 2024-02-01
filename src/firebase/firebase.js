// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase ,ref, update,get,set} from "firebase/database"
//import React from "react";
//import { useState,useEffect } from "react";
// import { json } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd2GGPFMrsZ8vb2l1FkdpYY7Zltw9gFOw",
  authDomain: "smart-home-af723.firebaseapp.com",
  databaseURL: "https://smart-home-af723-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-home-af723",
  storageBucket: "smart-home-af723.appspot.com",
  messagingSenderId: "333009209340",
  appId: "1:333009209340:web:20e43be89ecc56ccd75479"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const Deletedata = (roomName,switchName,typeofSwitch)=>{
const db = getDatabase()
const dbRef = ref(db,roomName+"/"+switchName) 
console.log(roomName,switchName,typeofSwitch,dbRef,"hiiam fgfg")
get(dbRef)
.then((snapshot)=>{
if(snapshot.exists()){
  set(dbRef,{})

  console.error("dataexist");
  
}
else{
  console.log("does not exist")
}


})
.catch((error)=>{console.log(error)
})
}





export function UpdateroomField(roomName,switchName,typeofSwitch,pin){
  const db = getDatabase()
  const dbRef = ref(db,roomName+"/"+switchName) 
  console.log(roomName,switchName,typeofSwitch,"hiiam fgfg")
 

get(dbRef)
.then((snapshot)=>{
  if(snapshot.exists()){
    console.error("dataexist");   
  }
  else{
    let udate = { };
    udate.status="";
    udate.pin=pin;
    udate.typeofSwitch =typeofSwitch; 
    update(dbRef, udate);
    console.log("updat")
  }
  

})
.catch((error)=>{console.log(error)
})
}



export const updatedata=(roomName,switchName,status)=>{
  const db = getDatabase()
  console.log(db,"hiiam firebase")
  const dbr=ref(db,'/')
  const dbRef = ref(db,roomName+'/'+switchName) 
  console.log(roomName,status,"hiiam fire")
  let udate = {};
  let str={};
  udate.status = `${status}`;
   str.String=roomName+'/'+switchName+'/'
  update(dbRef, udate);
  update(dbr,str)
  // update(dbRef,{
  // productid:status
  // })
}

// export function ReadData (roomName) {
//   const[retData,setRetData] = useState(null);

//   console.log(roomName);
//   useEffect(() => {
//   const db=getDatabase()
  
//   const reference=ref(db,`${roomName}`)
// get(reference)
// .then((snapshot) =>{
//  const data =snapshot.val();
// setRetData(data);
//   console.log(data,"dataread")
// })
// })
// }
// ;
export default app

// const writeUserData=(ProductId,name,status)=>{
// const db = getDatabase()
// const reference = ref(db,"/Room1/") 

// set(reference,{
// ProductId:status,
// led_status:status,
// })
// } 
// export default writeUserData