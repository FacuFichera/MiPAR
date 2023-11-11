// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD0h-Y04b26IVbXirUzfE5qQI1lsuPw9CA",
  authDomain: "coderhouse-reactff.firebaseapp.com",
  projectId: "coderhouse-reactff",
  storageBucket: "coderhouse-reactff.appspot.com",
  messagingSenderId: "874125534903",
  appId: "1:874125534903:web:d328dbeb06eefaf997cf32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
