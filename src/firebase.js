// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr2Ta7ZKrE7Akbub1AayZvrfvnmvzjG8E",
  authDomain: "web-development-firebase.firebaseapp.com",
  projectId: "web-development-firebase",
  storageBucket: "web-development-firebase.appspot.com",
  messagingSenderId: "300976904671",
  appId: "1:300976904671:web:766ab9a8964041efef8c6a",
  measurementId: "G-1715JZPP6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);