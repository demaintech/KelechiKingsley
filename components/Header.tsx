// Components
import NavBar from './NavBar';
import MobileNav from './MobileNav';


// Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


// accent #00ff99 hover #00e187


const Header = () => {
  return (
    <header className="w-full bg-transparent py-8 xl:py-8 text-white p-4  md:p-6  flex justify-between xl:justify-around items-center">
        <div className='flex gap-2 items-center flex-row justify-center xl:-ml-12 pl-6 xl:pl-0'>
          {/* <span className='w-6 h-6 flex justify-center items-center'>
            <FontAwesomeIcon icon={faCode} className=' text-[#8973EC] text-[20px]'/>
          </span> */}
          <Image src="/logo.png" width={40} height={40} alt='Logo'/>
          <h1 className='text-[25px] font-semibold font-mono text-gray-300'>demain<span className='text-[#8973EC]'>Tech</span></h1>
        </div>

        <div className='hidden lg:flex'>
          <NavBar />
        </div>

        {/* Desktop nav and hire me button */}
        <div className='hidden lg:flex w-auto items-center gap-8'>
            
            <button className='w-[120px] h-[45px] rounded- bg-[#8973EC]  text-black font-semibold text-[19px]'>Hire me</button>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
    </header>
  )
}

export default Header;  