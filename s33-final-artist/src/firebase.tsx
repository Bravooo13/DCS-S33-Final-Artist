// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2riVXsD0Ra3nQLOdHBKJzp6yugKk4_s4",
  authDomain: "s33-final-artist.firebaseapp.com",
  projectId: "s33-final-artist",
  storageBucket: "s33-final-artist.appspot.com",
  messagingSenderId: "596700630192",
  appId: "1:596700630192:web:e2a1fea0cdca0e5ea67f75",
  measurementId: "G-ZYZM4W9R5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
