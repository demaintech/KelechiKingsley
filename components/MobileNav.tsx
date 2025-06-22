"use client";

import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: "Home",
        path: "/",
    },

    {
        name: "About me",
        path: "/about",
    },

    {
        name: "Services",
        path: "/service",
    },

    {
        name: "Resume",
        path: "/resume",
    },

    {
        name: "Projects",
        path: "/work",
    },

    {
        name: "Contact",
        path: "/contact",
    },
];


const MobileNav = () => {
    const pathname = usePathname();
  return (
    <div>
        <div>
            <CiMenuFries className='text-[#00ff99] text-[30px] cursor-pointer font-bold' />
        </div>
    </div>
  )
}

export default MobileNav