import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBVqVO81GhxVFvcaeSbyzXuY3BI8hff4w",
  authDomain: "majorproject-35e3f.firebaseapp.com",
  projectId: "majorproject-35e3f",
  storageBucket: "majorproject-35e3f.appspot.com",
  messagingSenderId: "987868972779",
  appId: "1:987868972779:web:5a10b9b1538bcec87e20ae",
  measurementId: "G-39ZXX2BE2H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore=getFirestore(app);

export default {auth,firestore};