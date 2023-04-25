import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';

import Logo from './../../public/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed left-0
    w-full border-b border-zinc-400 bg-[#fff] z-20'>
        {/*-- CONTAINER --*/}
        <div className='max-w-[1240px] w-full flex text-2xl justify-between items-center h-fit mx-auto px-[2%] py-6 text-black'>
                {/*-- LOGO -- */}
                <a className='pt-2'>
                <Image 
                    src={Logo}
                    alt='/'
                    width={150}
                />
                </a>
            {/*-- DESKTOP MENU --*/}
            <ul className='hidden uppercase md:flex'>
                <a href='#'><li className='p-2 font-bold'>Home</li></a>
                <a href='#'><li className='p-2'>Sobre</li></a>
                <a href='#'><li className='p-2'>Projetos</li></a>
                <a href='#'><li className='p-2'>Contato</li></a>
            </ul>

            {/*-- MOBILE MENU --*/}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40} />}
            </div>
            
            <ul className={nav ? 'fixed z-20 uppercase left-0 top-0 pt-6 w-[60%] h-full border-r border-r-gray-300 bg-[#f7f7f7] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <a href='#' className='w-full'>
                <li className='p-4 mb-8'>
                    <Image 
                            src={Logo}
                            alt='/'
                            width={250}
                        />
                </li>
            </a>
                <a href='#'><li className='p-4 border-b border-gray-300'>Home</li></a>
                <a href='#'><li className='p-4 border-b border-gray-300'>Sobre</li></a>
                <a href='#'><li className='p-4 border-b border-gray-300'>Projetos</li></a>
                <a href='#'><li className='p-4'>Contato</li></a>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;