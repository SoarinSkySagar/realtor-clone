import React from 'react'
import {useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const nav = useNavigate();
    function pathMatchRoute(path) {
        if (path ===  location.pathname) {
            return true;
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer' onClick={() => nav("/")} />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 font-semibold ${pathMatchRoute("/") ? "text-black border-b-[3px] border-b-red-500":"text-gray-400"} `} onClick={() => nav("/")}>Home</li>
                    <li className={`cursor-pointer py-3 font-semibold ${pathMatchRoute("/offers") ? "text-black border-b-[3px] border-b-red-500":"text-gray-400"} `} onClick={() => nav("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 font-semibold ${pathMatchRoute("/login") ? "text-black border-b-[3px] border-b-red-500":"text-gray-400"} `} onClick={() => nav("/login")}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  );
}
