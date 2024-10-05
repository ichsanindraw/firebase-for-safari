import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  };


const firebaseApp = initializeApp(firebaseConfig);

let messaging = null;

if (typeof window !== "undefined") {
    messaging = getMessaging(firebaseApp);
    console.log(messaging);
}

// Listen for foreground messages
onMessage(messaging, (payload) => {
  console.log('Message received in the foreground:', payload);
  // Customize notification display logic here if needed
  // Extract notification data
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  // Check if the browser supports notifications
  if (Notification.permission === 'granted') {
    // Show the notification
    new Notification(notificationTitle, notificationOptions);
    // self.registration.showNotification(notificationTitle, notificationOptions);
    console.log('Show Notif dong');
  } else {
    console.log('Notification permission not granted');
  }
});

export { messaging };