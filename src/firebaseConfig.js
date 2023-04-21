// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ_Tc-3hZOkoWfMmfs7O4bs9XMH5n8BJM",
  authDomain: "fluffydelights-e7dcc.firebaseapp.com",
  projectId: "fluffydelights-e7dcc",
  storageBucket: "fluffydelights-e7dcc.appspot.com",
  messagingSenderId: "726560235596",
  appId: "1:726560235596:web:468f113dc6c7e6c29e14e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
