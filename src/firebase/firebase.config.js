// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjmPVXl3EuzZjjqhOQ9o-rT921t2jXUNo",
  authDomain: "newspaper-alo.firebaseapp.com",
  projectId: "newspaper-alo",
  storageBucket: "newspaper-alo.firebasestorage.app",
  messagingSenderId: "23581528688",
  appId: "1:23581528688:web:35dc90d2a0ba561344dab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;