import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqS4cCwj_ps41HmP-24GzQTa6ynyzaN1k",
  authDomain: "rayito-de-luna-dg.firebaseapp.com",
  projectId: "rayito-de-luna-dg",
  storageBucket: "rayito-de-luna-dg.appspot.com",
  messagingSenderId: "464701671760",
  appId: "1:464701671760:web:0c9d7dac0f40c253ebc455"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
