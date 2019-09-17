import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyB0RNM6uJxo_My705uZtlQ0thOPHmDbTIo",
  authDomain: "simplechat-da5a0.firebaseapp.com",
  databaseURL: "https://simplechat-da5a0.firebaseio.com",
  projectId: "simplechat-da5a0",
  storageBucket: "",
  messagingSenderId: "462871788416",
  appId: "1:462871788416:web:2abc6e5c5db2059c085f65"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;