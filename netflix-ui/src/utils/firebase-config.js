import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiDRQPtBe1vaFT2Q6hIKbk3Z15mCbYpjo",
  authDomain: "react-netflix-clone-4b8ae.firebaseapp.com",
  projectId: "react-netflix-clone-4b8ae",
  storageBucket: "react-netflix-clone-4b8ae.appspot.com",
  messagingSenderId: "608561555464",
  appId: "1:608561555464:web:de37855dfcf973b2f389bd",
  measurementId: "G-H5D0T3KJY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
