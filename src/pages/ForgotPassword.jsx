import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function ForgotPassword() {

  const [email, setEmail] = useState("");
  
  function onChange(e) {
    setEmail(e.target.value);
  }

  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent");
      navigate("/login");
    } catch (error) {
      toast.error("No account exists with the given email");
    }

  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-3 font-bold'>Reset Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80" alt="keys" className='rounded-3xl w-full' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input type="email" className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' id='email' value={email} onChange={onChange} placeholder='Email address'/>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
              <p>Don't have an account? <Link to="/register" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out'>Register</Link></p>
              <p><Link to="/login" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Sign in instead</Link></p>
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800'>Send password reset email</button>
          <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth/>
          </form>
          
        </div>
      </div>
    </section>
  )
}