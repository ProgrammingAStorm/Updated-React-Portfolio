// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV423iPYZxvKRMPlmzWo4yLZ3Km13Vovg",
  authDomain: "react-portfolio-2ec18.firebaseapp.com",
  projectId: "react-portfolio-2ec18",
  storageBucket: "react-portfolio-2ec18.appspot.com",
  messagingSenderId: "482115090543",
  appId: "1:482115090543:web:2c8b42cc84cf504e28759a",
  measurementId: "G-727MHKLPMX",
  databaseURL: "https://react-portfolio-2ec18-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app };
export { database };