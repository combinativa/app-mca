// /firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔧 COLE SUA CONFIG AQUI
const firebaseConfig = {
  apiKey: "AIzaSyAKrClfvxMJkYrPRAjgJ-sPVGwzQjwpi6o",
  authDomain: "app-mca.firebaseapp.com",
  projectId: "app-mca",
  storageBucket: "app-mca.firebasestorage.app",
  messagingSenderId: "978596706552",
  appId: "1:978596706552:web:3093ecaa431df41a78a30d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
