// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBABVR2HnoPW_6C9E5s8EOyQatqc0vFhNk",
  authDomain: "e-commerce-1d5d1.firebaseapp.com",
  projectId: "e-commerce-1d5d1",
  storageBucket: "e-commerce-1d5d1.firebasestorage.app",
  messagingSenderId: "686781846020",
  appId: "1:686781846020:web:0cf6cafe63d481b60d9b51",
  measurementId: "G-RPL5YEJZ8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);