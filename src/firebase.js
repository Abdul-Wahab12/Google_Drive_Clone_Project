import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB0oJfB9iPW6DgQK1tB5mQR2qFpYzDLZVY",
    authDomain: "drive-clone-f4008.firebaseapp.com",
    projectId: "drive-clone-f4008",
    storageBucket: "drive-clone-f4008.appspot.com",
    messagingSenderId: "1022842442588",
    appId: "1:1022842442588:web:ad2e3884d8dcf62ca96799"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, storage, auth, provider }