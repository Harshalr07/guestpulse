import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt9nCJLg-5lqY9pO556_DGxZukCoxuMcs",
  authDomain: "rsvp-a998f.firebaseapp.com",
  projectId: "rsvp-a998f",
  storageBucket: "rsvp-a998f.firebasestorage.app",
  messagingSenderId: "496775372483",
  appId: "1:496775372483:web:04ef5d45e22ad735834c76",
  measurementId: "G-79W1BCRB5H"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;