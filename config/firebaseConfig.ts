// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Import getStorage correctly as a named import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "kidsaisaas.firebaseapp.com",
  projectId: "kidsaisaas",
  storageBucket: "kidsaisaas.appspot.com",
  messagingSenderId: "743177141774",
  appId: "1:743177141774:web:1704be1bc1e9308f82065f",
  measurementId: "G-L93JLMCP18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); // Correct usage of getStorage




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import getStorage from "firebase/storage"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: "kidsaisaas.firebaseapp.com",
//   projectId: "kidsaisaas",
//   storageBucket: "kidsaisaas.appspot.com",
//   messagingSenderId: "743177141774",
//   appId: "1:743177141774:web:1704be1bc1e9308f82065f",
//   measurementId: "G-L93JLMCP18"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app)