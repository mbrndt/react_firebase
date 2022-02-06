import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDp7PHJqdVkVOCPtsbC49PUJtcubHrkotM",
  authDomain: "fireship-demo-a5b9d.firebaseapp.com",
  projectId: "fireship-demo-a5b9d",
  storageBucket: "fireship-demo-a5b9d.appspot.com",
  messagingSenderId: "94536361621",
  appId: "1:94536361621:web:6224e73d9fa1bbb95f5d9c",
  measurementId: "G-9H4JXGJCCP",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
