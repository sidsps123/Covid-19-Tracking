import firebase from './firebase';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDD4JEsAkMPoXmm-xapWQoqWImr_1xW3eY",
    authDomain: "login-ca637.firebaseapp.com",
    projectId: "login-ca637",
    storageBucket: "login-ca637.appspot.com",
    messagingSenderId: "534143455419",
    appId: "1:534143455419:web:ced3713e39cbb36123d99e",
    measurementId: "G-QC8C40DCF2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default firebase;