// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bluestatereality.firebaseapp.com",
  projectId: "bluestatereality",
  storageBucket: "bluestatereality.appspot.com",
  messagingSenderId: "902928226999",
  appId: "1:902928226999:web:8c88d4e53ab36bf36b4b32",
  measurementId: "G-7591ZS0C94",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
