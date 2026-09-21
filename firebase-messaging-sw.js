importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyArPb4CyEgpjHSF4ePyE2NE7RY4P5GxPks",
  authDomain: "ssap-00.firebaseapp.com",
  projectId: "ssap-00",
  storageBucket: "ssap-00.firebasestorage.app",
  messagingSenderId: "914204702517",
  appId: "1:914204702517:web:d4bd735de25e74db8e3e7c"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});