// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1IONzLLFO0zWor6BJIhC5dP6950jG2Yo",
  authDomain: "freashvalley2.firebaseapp.com",
  projectId: "freashvalley2",
  storageBucket: "freashvalley2.appspot.com",
  messagingSenderId: "45809925446",
  appId: "1:45809925446:web:68b71da5027208c517b947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;