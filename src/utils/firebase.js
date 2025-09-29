// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0SZVVVzZiFM5E1q_trlptSV-cvpKFzeY",
  authDomain: "chill-app-project.firebaseapp.com",
  projectId: "chill-app-project",
  storageBucket: "chill-app-project.firebasestorage.app",
  messagingSenderId: "936192689157",
  appId: "1:936192689157:web:f0b0fba2d8e3c357fd486c",
  measurementId: "G-6LM8E29JHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)