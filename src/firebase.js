import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
//   authDomain: "portofolio-web-3e8e8.firebaseapp.com",
//   projectId: "portofolio-web-3e8e8",
//   storageBucket: "portofolio-web-3e8e8.appspot.com",
//   messagingSenderId: "25195509306",
//   appId: "1:25195509306:web:2b635dcf997137bf612703"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


const firebaseConfig = {
  apiKey: "AIzaSyBFR10D5KWQVSCSR3o6GnFA0Gx7ZM8bbgs",
  authDomain: "portafolio-5072e.firebaseapp.com",
  projectId: "portafolio-5072e",
  storageBucket: "portafolio-5072e.firebasestorage.app",
  messagingSenderId: "236370542633",
  appId: "1:236370542633:web:913b1cadbbce65ddd8dc38",
  measurementId: "G-ZN4Y6ZKYFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };