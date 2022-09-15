// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0NWtzI29qs5GjzsWPloRWoFTF3Fpjd94",
  authDomain: "flixshow-99c08.firebaseapp.com",
  projectId: "flixshow-99c08",
  storageBucket: "flixshow-99c08.appspot.com",
  messagingSenderId: "1051993519124",
  appId: "1:1051993519124:web:caa4f7484c55cc5932e301",
  measurementId: "G-ZXZ75X94QR"
};
// Initialize Firebase
export const firebaseappconfig = initializeApp(firebaseConfig);
export const Storage = getStorage(firebaseappconfig)