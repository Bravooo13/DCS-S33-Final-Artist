// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrb86ZoGcP9zSt8BJ03fXsRtiuv9kikF8",
  authDomain: "s33-final-artist-npm.firebaseapp.com",
  projectId: "s33-final-artist-npm",
  storageBucket: "s33-final-artist-npm.appspot.com",
  messagingSenderId: "42389505593",
  appId: "1:42389505593:web:b0c7f48e1d1b1ec9b0afe8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
