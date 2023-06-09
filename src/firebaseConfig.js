// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ_Tc-3hZOkoWfMmfs7O4bs9XMH5n8BJM",
  authDomain: "fluffydelights-e7dcc.firebaseapp.com",
  projectId: "fluffydelights-e7dcc",
  storageBucket: "fluffydelights-e7dcc.appspot.com",
  messagingSenderId: "726560235596",
  appId: "1:726560235596:web:468f113dc6c7e6c29e14e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
