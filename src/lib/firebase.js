import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhMHGPyDRsxRRowYDRfX9izF1pdkr-rgA",
  authDomain: "reactchat-c2daf.firebaseapp.com",
  projectId: "reactchat-c2daf",
  storageBucket: "reactchat-c2daf.appspot.com",
  messagingSenderId: "892568902216",
  appId: "1:892568902216:web:0b77a5c48ba3295cf8967d"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()