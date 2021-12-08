import "firebase/firestore";
/* import firebase from "firebase/app"; */
import { initializeApp } from 'firebase/app';




const firebaseConfig = {

    apiKey: "AIzaSyBUughYMr77ERo7o7PuDhN-08Sd9qyHF6k",
  
    authDomain: "devs-united-22e9c.firebaseapp.com",
  
    projectId: "devs-united-22e9c",
  
    storageBucket: "devs-united-22e9c.appspot.com",
  
    messagingSenderId: "587149900198",
  
    appId: "1:587149900198:web:1ed3b8ebd321993e677767"
  
  };

  
/* firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();  
export default firebase; */

export const app = initializeApp(firebaseConfig);



