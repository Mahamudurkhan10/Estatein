// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU_bXRd4Om4VtO8ETKNFQ7thVIXsu4d3k",
  authDomain: "estatein-aee5c.firebaseapp.com",
  projectId: "estatein-aee5c",
  storageBucket: "estatein-aee5c.appspot.com",
  messagingSenderId: "451375867545",
  appId: "1:451375867545:web:a6f9356cf962d9be743a08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)