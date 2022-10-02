import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyBT0XTavw1m54a9SpR9gcR2YOMQV2pQZLE",
    authDomain: "e-bike-f3316.firebaseapp.com",
    projectId: "e-bike-f3316",
    storageBucket: "e-bike-f3316.appspot.com",
    messagingSenderId: "934408882424",
    appId: "1:934408882424:web:8fac14c1136195ff92130d"
  };

export default firebase.firestore();
