// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiTi4AX-2Png1OyVXRXnZx6b5CfzMj5_0",
  authDomain: "projetofuracaoian.firebaseapp.com",
  projectId: "projetofuracaoian",
  storageBucket: "projetofuracaoian.appspot.com",
  messagingSenderId: "479523765714",
  appId: "1:479523765714:web:ff9c8d80c52ad87ff71c0b",
  measurementId: "G-0635D01GLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);