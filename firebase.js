 var config = {
        messagingSenderId: "1008318661047",
        apiKey: "AIzaSyDzIIy78Kc1Da9vJYwpjhu8L1xGS05abiM",
        projectId: "test-app-ce7c9",
        appId: "1:1008318661047:web:60013725f1b192ea9d2832"
    };
 firebase.initializeApp(config);


 const messaging = firebase.messaging();
 messaging
   .requestPermission()
   .then(function () {
     MsgElem.innerHTML = "Notification permission granted." 
     console.log("Notification permission granted.");

     // get the token in the form of promise
     return messaging.getToken()
   })
   .then(function(token) {
     // print the token on the HTML page
     TokenElem.innerHTML = "Device token is : <br>" + token
   })
   .catch(function (err) {
   ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
   console.log("Unable to get permission to notify.", err);
 });

