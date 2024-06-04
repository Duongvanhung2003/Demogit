// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5M2zGly27UjbNQ0Oy9SPphLdR11E_9m0",
  authDomain: "chatapp-58fd4.firebaseapp.com",
  databaseURL: "https://chatapp-58fd4-default-rtdb.firebaseio.com",
  projectId: "chatapp-58fd4",
  storageBucket: "chatapp-58fd4.appspot.com",
  messagingSenderId: "530039731251",
  appId: "1:530039731251:web:c46fb6c419a78c56acdf46",
  measurementId: "G-3JHEVTGVLF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const authentication =getAuth(app);