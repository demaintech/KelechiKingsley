"use client";

import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

import { motion } from "framer-motion";
import { useState } from 'react';

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
    const [openNav, setOpenNav] = useState(false)
    const pathname = usePathname();
  return (
    <div >
        <div>
            <button 
                onClick={() => setOpenNav(true)}
            >
                <CiMenuFries className='text-[#00ff99] text-[30px] cursor-pointer font-bold' />
            </button>
        </div>

        {/* Mobile Nav Contents */}
        <div className={`${openNav === true ? "block" : "hidden"} w-[100%] h-[100vh] bg-[rgba(0,0,0,40%)] z-50 fixed top-0 left-0`}>
            <motion.div 
                initial={{ opacity: 0, x: -300 }}           // Start 40px lower and invisible
                whileInView={{ opacity: 1, x: 0 }}        // Animate to visible and y=0
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className='w-[80%] h-[100%] border-gray-800 backdrop-blur-lg'></motion.div>
        </div>
    </div>
  )
}

export default MobileNav