// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZGB0BmR5n8iGl6ARa6IzynyNCCKcsStw",
  authDomain: "bbb-demo-111.firebaseapp.com",
  projectId: "bbb-demo-111",
  storageBucket: "bbb-demo-111.appspot.com",
  messagingSenderId: "863641309319",
  appId: "1:863641309319:web:84f2bbec8bd055f556a822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db}