import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS8qJX--pLueckNZDlVM_sPXBayt6Tlks",
  authDomain: "leaderboard-c9ab2.firebaseapp.com",
  projectId: "leaderboard-c9ab2",
  storageBucket: "leaderboard-c9ab2.appspot.com",
  messagingSenderId: "543828741219",
  appId: "1:543828741219:web:eddd215fc13798c2353c56",
  measurementId: "G-S9E99KYWS0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
