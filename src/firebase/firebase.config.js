// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA65yfcIL56COQFosXZZ50dXzwjzD5GCCY",
  authDomain: "job-portal-a519b.firebaseapp.com",
  projectId: "job-portal-a519b",
  storageBucket: "job-portal-a519b.firebasestorage.app",
  messagingSenderId: "168688371218",
  appId: "1:168688371218:web:991d6d8240e26f84cc7acb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
