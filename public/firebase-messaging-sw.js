// Firebaseのバックグラウンドメッセージング用サービスワーカー
importScripts('https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.1.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAb2u6KAqvesS0ruc8npdwZlDiWUpQywQQ",
  authDomain: "tf-log.firebaseapp.com",
  projectId: "tf-log",
  storageBucket: "tf-log.firebasestorage.app",
  messagingSenderId: "469720285191",
  appId: "1:469720285191:web:302849209f97b010b62aa2",
  measurementId: "G-NE1RQKENVR"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] バックグラウンドメッセージを受信しました:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});