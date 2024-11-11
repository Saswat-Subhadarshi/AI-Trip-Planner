// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0yfm2TgUjbwLIWnxyPtaRASpahoSk6aQ",
  authDomain: "ai-trip-planner-a7f61.firebaseapp.com",
  projectId: "ai-trip-planner-a7f61",
  storageBucket: "ai-trip-planner-a7f61.appspot.com",
  messagingSenderId: "206041570055",
  appId: "1:206041570055:web:7c66a10eeaca503af803a2",
  measurementId: "G-KJB2Q803HY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);


// const analytics = getAnalytics(app);