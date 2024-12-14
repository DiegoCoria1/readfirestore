// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBVgg4s_PvNZxQ8DEYpkXNoBKli7VuMerQ",
  authDomain: "readfirestore-ff9ae.firebaseapp.com",
  projectId: "readfirestore-ff9ae",
  storageBucket: "readfirestore-ff9ae.firebasestorage.app",
  messagingSenderId: "192408585945",
  appId: "1:192408585945:web:0ca8b69e4bf5a4e11da0c8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
