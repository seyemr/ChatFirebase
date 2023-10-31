// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkS6GZBMetrZ1ojpoZf4rTzFvB44ZecKk",
  authDomain: "chat1-f12dd.firebaseapp.com",
  projectId: "chat1-f12dd",
  storageBucket: "chat1-f12dd.appspot.com",
  messagingSenderId: "892969028933",
  appId: "1:892969028933:web:9ae6787080ff62e2d6c22c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)