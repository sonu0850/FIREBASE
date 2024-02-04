import { initializeApp } from "firebase/app";




const firebaseConfig = {
    apiKey: "AIzaSyBn3em4rlOrPf1E7BFsSq4fMwSmq_4Lf8s",
    authDomain: "ap-f94b5.firebaseapp.com",
    projectId: "ap-f94b5",
    storageBucket: "ap-f94b5.appspot.com",
    messagingSenderId: "1091822467774",
    appId: "1:1091822467774:web:bcca70dab6fbaaa0e0fcef",
    databaseURL:'https://ap-f94b5-default-rtdb.firebaseio.com/'
  };


  export const app = initializeApp(firebaseConfig)