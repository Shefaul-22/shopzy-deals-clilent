// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJXkUjaqZNbLlBazQ8TNS3cKEwQkESR0A",
  authDomain: "shopzy-deals.firebaseapp.com",
  projectId: "shopzy-deals",
  storageBucket: "shopzy-deals.firebasestorage.app",
  messagingSenderId: "269359770185",
  appId: "1:269359770185:web:385edca5bfeabce13aad98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);