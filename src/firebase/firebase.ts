// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDmBUPiC4ERJdWn2fMpnLxc4mh4GROua8",
  authDomain: "art-quiz-7a434.firebaseapp.com",
  projectId: "art-quiz-7a434",
  storageBucket: "art-quiz-7a434.appspot.com",
  messagingSenderId: "377040346869",
  appId: "1:377040346869:web:2d2457154a07d6917d6fbc",
  measurementId: "G-8BCMRLYK18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// export default { app, analytics }