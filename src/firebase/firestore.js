// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTSTuRuqZx6u8nzH_mryt2V-KcJm7MMXY",
  authDomain: "karya-vyavastha.firebaseapp.com",
  projectId: "karya-vyavastha",
  storageBucket: "karya-vyavastha.appspot.com",
  messagingSenderId: "242589086560",
  appId: "1:242589086560:web:e48f8d4200c38f3ceee405",
  measurementId: "G-MND02ZGV3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, auth, db};