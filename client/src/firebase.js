// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "goril-estate.firebaseapp.com",
  projectId: "goril-estate",
  storageBucket: "goril-estate.appspot.com",
  messagingSenderId: "169735418275",
  appId: "1:169735418275:web:f92de6b6f1117acc5e2a16"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);