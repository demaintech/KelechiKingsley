"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 5 seconds (5000 ms)
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-900 text-white">
        {/* Your preloader content here */}
            <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] flex flex-col items-center justify-center gap-4'>
               <DotLottieReact
                src="https://lottie.host/4cbf9f67-1002-4c52-a646-dcf1876ff09d/C3wJmngK81.lottie"
                loop
                autoplay
              />
              {/* <span className="text-3xl font-bold">Loading...</span> */}
            </div>
       
      </div>
    );
  }

  return (
    <main className="w-full relative flex justify-center items-center flex-col overflow-hidden mx-auto ">
      {/* <Spotlight className='top-0 absolute'/> */}
      <Header />
      <Home />
      <Footer />
    </main>
  );
};

export default Page;