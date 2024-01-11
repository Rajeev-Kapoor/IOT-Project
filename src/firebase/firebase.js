// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase ,ref,set} from "firebase/database"
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

const writeUserData=(ProductId,name,status)=>{
const db = getDatabase()
const reference = ref(db,"/") 
set(reference,{

led_status:status,
})
} 
export default writeUserData