import { initializeApp } from "firebase/app" ;   
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
  apiKey : "AIzaSyChT-i_JAVnusNApt3boGgoLRRg5uis8pU" , 
  authDomain : "queuing-system-160d8.firebaseapp.com" , 
  projectId : "queuing-system-160d8" , 
  storageBucket : "queuing-system-160d8.appspot.com" , 
  messagingSenderId : "776682024643" , 
  appId : "1:776682024643:web:5342e3962df176e4d67c76" , 
  measurementId : "G-93B8DWYBLV" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db