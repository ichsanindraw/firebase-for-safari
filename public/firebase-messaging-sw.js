// let vapidKey = "";

// self.addEventListener("message", (event) => {
//     console.log("addEventListener -> message");
    
//     console.log(event.data);
    
//     if (event.data && event.data.vapidKey) {
//         vapidKey = event.data.vapidKey
//     }
// });

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
const firebaseConfig = {
  apiKey: "AIzaSyD2LkJ7VSdvJfBViq4EkGG7aD5wrfQG4fE",
  authDomain: "testing-notif-in-ios.firebaseapp.com",
  projectId: "testing-notif-in-ios",
  storageBucket: "testing-notif-in-ios.appspot.com",
  messagingSenderId: "380629589616",
  appId: "1:380629589616:web:26561bf1fc3ab7061d1eb5",
  measurementId: "G-FSYFXB6B6C"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
