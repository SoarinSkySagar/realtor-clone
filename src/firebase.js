import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvgLHmvBN8Yg2bj0qxSPeiDvaJZbc7zcE",
  authDomain: "realtor-clone-e4fcd.firebaseapp.com",
  projectId: "realtor-clone-e4fcd",
  storageBucket: "realtor-clone-e4fcd.appspot.com",
  messagingSenderId: "708503624100",
  appId: "1:708503624100:web:ddaad73f8b9ed48cefc931"
};

initializeApp(firebaseConfig);
export const db = getFirestore();