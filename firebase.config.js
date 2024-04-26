// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvCJ9KODJ4aMFXMM09pFRhCBd8lgNSJB0",
  authDomain: "assignment-10-535b2.firebaseapp.com",
  projectId: "assignment-10-535b2",
  storageBucket: "assignment-10-535b2.appspot.com",
  messagingSenderId: "20055450256",
  appId: "1:20055450256:web:22d3014afdee1e0aee2e15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth
