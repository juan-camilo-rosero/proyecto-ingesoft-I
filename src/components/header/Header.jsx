"use client";

import { SectionContext } from '@/context/SectionContext'
import { RiMenu3Fill } from "react-icons/ri";
import Button from '../general/Button'
import { useContext } from 'react';

function Header() {
  const {setLoginOpen, setSignUpOpen} = useContext(SectionContext)
  const handleOpenSignup = e => setSignUpOpen(true)
  const handleOpenLogin = e => setLoginOpen(true)
  return (
    <header className="bg-fgray-200 w-screen px-8 py-4 fixed header-shadow flex flex-row  items-center justify-between md:px-16 lg:py-3 z-30">
      <div className='flex items-center gap-2'>
        <img src="/logo/logo_talkie.png" alt="Logo fractal" className="h-6 md:h-8"/>
        <p className='text-xl lg:text-2xl mb-1 font-semibold'>Talkie</p>
      </div>
      <div className="hidden md:flex md:flex-row md:gap-8">
        <Button text="Iniciar sesión" type="secondary" func={handleOpenLogin}/>
        <Button text="Registrarme" type="primary" func={handleOpenSignup}/>
      </div>
    </header>
  );
}

export default Header;
