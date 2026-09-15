import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getFirestore, doc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAb2u6KAqvesS0ruc8npdwZlDiWUpQywQQ",
  authDomain: "tf-log.firebaseapp.com",
  projectId: "tf-log",
  storageBucket: "tf-log.firebasestorage.app",
  messagingSenderId: "469720285191",
  appId: "1:469720285191:web:302849209f97b010b62aa2",
  measurementId: "G-NE1RQKENVR"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);
export const firestoreOps = { doc, setDoc, deleteDoc };

// 既存のグローバル参照（window）を使ったコードと互換性を持たせるため
window.db = db;
window.firestoreOps = firestoreOps;