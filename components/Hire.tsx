"use client";

import { faContactBook, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

const Hire = () => {

  useGSAP(() => {
    // const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power2.inOut" } });

    gsap.timeline({
          scrollTrigger: {
            trigger: '#hire',
            start: 'top bottom',
            end: 'top 50vh',
            scrub: true,  
          }
      })
        .fromTo('.hirebtn', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 }, "-=0.5")

  }, []);
  return (
    <div className='py-20 hirebtn' id='hire'>
        <h2 className='text-white font-bold text-[40px] text-center'>Got a Project? Let's Talk.</h2>
        <p className='text-gray-500 text-[16px] xl:w-[90%] font-bold text-center mx-auto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque, odio veniam iste corporis enim. Distinctio. </p>
        <div className='w-full flex justify-center items-center flex-col md:flex-row mt-6 gap-4'>
          <button 
            className='w-[200px] h-[50px] bg-[#8973EC] text-gray-900 text-[17px] font-bold  hover:opacity-75 cursor-pointer flex justify-center items-center gap-2'
          >
            <span className=''>
              <FontAwesomeIcon icon={faDownload} />
            </span>
            Download CV</button>
          <button 
            className='w-[150px] h-[50px] bg-[#8973EC] text-gray-900 text-[17px] font-bold hover:opacity-75 cursor-pointer flex justify-center items-center gap-2'
          >
            <span className=''>
              <FontAwesomeIcon icon={faContactBook} />
            </span>
            Contact me</button>
        </div>
    </div>
  )
}

export default Hire