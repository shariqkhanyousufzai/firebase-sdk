importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyDzIIy78Kc1Da9vJYwpjhu8L1xGS05abiM",
    authDomain: "test-app-ce7c9.firebaseapp.com",
    projectId: "test-app-ce7c9",
    storageBucket: "test-app-ce7c9.appspot.com",
    messagingSenderId: "1008318661047",
    appId: "1:1008318661047:web:60013725f1b192ea9d2832",
    measurementId: "G-LKG09GQCFM"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
