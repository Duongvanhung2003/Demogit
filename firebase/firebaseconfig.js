// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCrDrzdypLsnHIlsvVLPQ1pjLiOg-mNxA",
  authDomain: "chatapp-551d3.firebaseapp.com",
  projectId: "chatapp-551d3",
  storageBucket: "chatapp-551d3.appspot.com",
  messagingSenderId: "830604903134",
  appId: "1:830604903134:web:a3fb9317d8481e455d784f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
