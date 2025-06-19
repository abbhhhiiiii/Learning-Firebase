import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWZYWqku0eR4xsSwSFawKdWlECBVMEbv4",
  authDomain: "learning-firebase-apps.firebaseapp.com",
  projectId: "learning-firebase-apps",
  storageBucket: "learning-firebase-apps.firebasestorage.app",
  messagingSenderId: "393425520080",
  appId: "1:393425520080:web:10144fa9017418105da5d5",
  measurementId: "G-RK3SEHRSLY",
  databaseURL: "https://learning-firebase-apps-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

export { app };