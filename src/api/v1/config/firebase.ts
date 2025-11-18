import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyxxxxxxx",
  authDomain: "test-project-1a599.firebaseapp.com",
  projectId: "test-project-1a599",
  storageBucket: "test-project-1a599.appspot.com",
  messagingSenderId: "558211643485",
  appId: "1:558211643485:web:xxxxxxx"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
