import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDJPq9a0YPoQYkpQ-Uaw7aXQRXzzqOKzFA",
//     authDomain: "web-kelas-tes.firebaseapp.com",
//     projectId: "web-kelas-tes",
//     storageBucket: "web-kelas-tes.appspot.com",
//     messagingSenderId: "890817433268",
//     appId: "1:890817433268:web:11e5258f8864a6174c11e1"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBFR10D5KWQVSCSR3o6GnFA0Gx7ZM8bbgs",
    authDomain: "portafolio-5072e.firebaseapp.com",
    projectId: "portafolio-5072e",
    storageBucket: "portafolio-5072e.firebasestorage.app",
    messagingSenderId: "236370542633",
    appId: "1:236370542633:web:913b1cadbbce65ddd8dc38",
    measurementId: "G-ZN4Y6ZKYFF"
  };
// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };