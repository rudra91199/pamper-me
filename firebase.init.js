// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs6eS7l8yoMafNLLTePTPYbuAaIBQ4i_s",
  authDomain: "pamper-me-auth.firebaseapp.com",
  projectId: "pamper-me-auth",
  storageBucket: "pamper-me-auth.appspot.com",
  messagingSenderId: "1077819092544",
  appId: "1:1077819092544:web:d6bc3a8750d941fb75f9a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;