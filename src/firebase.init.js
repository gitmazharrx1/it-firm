// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoW1IJO-js7kPEjrsckFVhXdzjdEbVPks",
  authDomain: "it-firm-6ac13.firebaseapp.com",
  projectId: "it-firm-6ac13",
  storageBucket: "it-firm-6ac13.appspot.com",
  messagingSenderId: "833176404951",
  appId: "1:833176404951:web:2d2149262d5b1e5b5e0192",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
