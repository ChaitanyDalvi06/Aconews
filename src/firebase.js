// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAszMwLv8G3107dLvsXFrNef4gKinMzCTI",
  authDomain: "acowale-news-24aa6.firebaseapp.com",
  projectId: "acowale-news-24aa6",
  storageBucket: "acowale-news-24aa6.appspot.com",
  messagingSenderId: "834017940411",
  appId: "1:834017940411:web:47c4bf9ae7dd283339aa9e",
  measurementId: "G-62NY4MFX9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);