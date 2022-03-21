import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFjnbxV7Lb6Dn0IEZFP50ILiqnQIm1D3U",
  authDomain: "uber-eats-clone-9b490.firebaseapp.com",
  projectId: "uber-eats-clone-9b490",
  storageBucket: "uber-eats-clone-9b490.appspot.com",
  messagingSenderId: "823487656520",
  appId: "1:823487656520:web:b5662150ef1ff87c2c5e7d",
  measurementId: "G-PC8LG48FFE",
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;