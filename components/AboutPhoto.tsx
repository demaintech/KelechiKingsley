"use client";
import Image from "next/image";
import { motion} from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// https://lottie.host/bd255937-c5c5-4822-808a-54e07d86c0f8/7slUmZTlUL.lottie  Skills

// https://lottie.host/2fdd5b19-ac65-4e53-9645-b4f5e9645e33/XYE36y1n3K.lottie   Cycle

// https://lottie.host/6fdb1bec-27c8-4471-8f08-38702f5c8ee7/FSp8dl5dLg.lottie   Modiied cycle

// https://lottie.host/4cbf9f67-1002-4c52-a646-dcf1876ff09d/C3wJmngK81.lottie   modified cycle with bg

const AboutPhoto = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{
            opacity: 1,
            transition: {delay: 2, duration: 0.4, ease: "easeIn"},
             }}
            >

             {/* Photo */}
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ 
                  opacity: 1, 
                  transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
                }}
                className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten border-2">
                {/* <Image 
                  src="/demain.png" 
                  priority quality={100} 
                  fill 
                  alt="" 
                  className="object-contain" /> */}
                <DotLottieReact
                  src="https://lottie.host/4cbf9f67-1002-4c52-a646-dcf1876ff09d/C3wJmngK81.lottie"
                  loop
                  autoplay
                />
                  
            </motion.div>

            {/* Circle */}
            {/* <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] " 
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.org/2000/svg"
            >
              <motion.circle 
                cx="253" 
                cy="253"
                r="250" 
                stroke="#00ff99"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                  strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                />
            </motion.svg> */}
        </motion.div>
    </div>
  )
}

export default AboutPhoto;