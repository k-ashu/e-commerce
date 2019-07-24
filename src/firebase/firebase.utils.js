import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnMiAXg9XXOFzYWSMHnQXf-4_rWqoPU_Y",
  authDomain: "e-commerce-db-c8ebd.firebaseapp.com",
  databaseURL: "https://e-commerce-db-c8ebd.firebaseio.com",
  projectId: "e-commerce-db-c8ebd",
  storageBucket: "",
  messagingSenderId: "609199035891",
  appId: "1:609199035891:web:34a7bea44fea663b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// providing google sign in pop up
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
