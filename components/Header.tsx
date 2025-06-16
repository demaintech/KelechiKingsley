import React from 'react';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

// accent #00ff99 hover #00e187


const Header = () => {
  return (
    <header className="w-full bg-transparent py-8 xl:py-8 text-white p-4  md:p-6  flex justify-around items-center">
        <div className='flex gap-2 items-center flex-row justify-center -ml-12'>
          <span className='w-6 h-6 flex justify-center items-center'>
            <FontAwesomeIcon icon={faCode} className=' text-[#00ff99] text-[20px]'/>
          </span>
          <h1 className='text-xl font-semibold font-mono text-gray-300'>demain<span className='text-[#00ff99] text-gray-900'>Tech</span></h1>
        </div>

        <div className='hidden xl:flex'>
          <NavBar />
        </div>

        {/* Desktop nav and hire me button */}
        <div className='hidden xl:flex w-auto items-center gap-8'>
            
            <button className='w-[120px] h-[45px] rounded- bg-[#00ff99]  text-black font-semibold text-[19px]'>Hire me</button>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">Mobile nav</div>
    </header>
  )
}

export default Header;  