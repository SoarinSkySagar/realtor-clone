import React from 'react';
import {FcGoogle} from 'react-icons/fc';

export default function OAuth() {
  return (
    <button className='flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-700 active:bg-red-800 transition duration-200 ease-in-out shadow-md hover:shadow-lg active:shadow-lg rounded'><FcGoogle className='mr-1 text-2xl bg-white rounded-full'/>Continue with Google</button>
  )
}
