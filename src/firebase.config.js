// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFbXjfAHruFctNppILi_1bfedM6P10-CU",
  authDomain: "phone-otp-4e80b.firebaseapp.com",
  projectId: "phone-otp-4e80b",
  storageBucket: "phone-otp-4e80b.firebasestorage.app",
  messagingSenderId: "887604078008",
  appId: "1:887604078008:web:13657f7ed845b939ea1b4d",
  measurementId: "G-3XVNC24CFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth=getAuth(app)