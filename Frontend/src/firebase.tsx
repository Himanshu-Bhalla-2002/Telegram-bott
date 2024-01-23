// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcjnWJdVdZNYjSII1vqGNkVock4moEJ78",
  authDomain: "telebothb.firebaseapp.com",
  projectId: "telebothb",
  storageBucket: "telebothb.appspot.com",
  messagingSenderId: "670703290324",
  appId: "1:670703290324:web:2d4684d09ed4ed40c77841",
  measurementId: "G-W0BB5BKDVR"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { storage, auth, provider, signInWithPopup, firebaseApp }; // Expo
