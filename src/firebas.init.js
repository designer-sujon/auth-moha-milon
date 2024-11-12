// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH4N88VKAHrnom62P0RUin-m1Gis_M_tI",
  authDomain: "auth-moha-milon-7a1cb.firebaseapp.com",
  projectId: "auth-moha-milon-7a1cb",
  storageBucket: "auth-moha-milon-7a1cb.firebasestorage.app",
  messagingSenderId: "676502049752",
  appId: "1:676502049752:web:c5d48bc9c6b7507ea558ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);