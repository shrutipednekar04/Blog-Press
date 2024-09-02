// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
  




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1bfJIgnK8b9kgvbZVfICyAJqc29g4tWo",
  authDomain: "myblog-8102c.firebaseapp.com",
  projectId: "myblog-8102c",
  storageBucket: "myblog-8102c.appspot.com",
  messagingSenderId: "1021547046618",
  appId: "1:1021547046618:web:9e650c962af985cab1e7e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);

export { fireDB, auth, storage };