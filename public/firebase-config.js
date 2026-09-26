// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAb2u6KAqvesS0ruc8npdwZlDiWUpQywQQ",
  authDomain: "tf-log.firebaseapp.com",
  projectId: "tf-log",
  storageBucket: "tf-log.firebasestorage.app",
  messagingSenderId: "469720285191",
  appId: "1:469720285191:web:302849209f97b010b62aa2",
  measurementId: "G-NE1RQKENVR"
};

// Firebaseの初期化（重複防止）
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}