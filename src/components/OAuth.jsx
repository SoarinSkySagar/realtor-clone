import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router';

export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if(!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }
      toast.success('Google login successful');
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <button type='button' onClick={onGoogleClick} className='flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-700 active:bg-red-800 transition duration-200 ease-in-out shadow-md hover:shadow-lg active:shadow-lg rounded'><FcGoogle className='mr-1 text-2xl bg-white rounded-full'/>Continue with Google</button>
  )
}
