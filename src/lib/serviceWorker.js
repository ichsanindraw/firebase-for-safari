
export default function registerServiceWorker() {
    console.log("registerServiceWorker");
    console.log(navigator);
    console.log("serviceWorker" in navigator);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope);
          // Send the VAPID key to the service worker
          registration.active?.postMessage({
            vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
          });
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }
  