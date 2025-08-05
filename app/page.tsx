"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 5 seconds (5000 ms)
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center w-screen h-screen bg-gray-900 text-white">
        {/* Your preloader content here */}
            {/* <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] flex flex-col items-center justify-center gap-4'>
               <DotLottieReact
                src="https://lottie.host/4cbf9f67-1002-4c52-a646-dcf1876ff09d/C3wJmngK81.lottie"
                loop
                autoplay
              />
              
            </div> */}
          <Image src="/logo.png" width={100} height={100} alt='Logo'/>
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">I'm <span className='text-[#8973EC]'>Kelechi Kingsley.</span></h1>
      </div>
    );
  }

  return (
    <main className="w-full relative flex justify-center items-center flex-col overflow-hidden mx-auto ">
      {/* <Spotlight className='top-0 absolute'/> */}
      {/* <Header /> */}
      <div className='fixed w-[100%] top-0 left-0 z-50'>
        <div className=' w-[90%] xl:w-[60%] mt-8 mx-auto backdrop-blur-lg border-gray-800 border-[2px] h-[80px] shadow-md rounded-[50px] p-0 flex justify-center items-center'>
          <Header />
        </div>
      </div>
      <Home />
      <Footer />
    </main>
  );
};

export default Page;