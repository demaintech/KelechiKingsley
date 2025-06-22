// https://lottie.host/65d8f30e-d617-49d5-b21e-90cf6a989b40/1BBmT6VP71.lottie
"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import Image from "next/image";
import AboutPhoto from "./AboutPhoto";
// import Photo from "./Photo";
import {FaReact} from "react-icons/fa"



// About

// Me Education Skills  WorkExperience

// Techmologies React Next Appwrite Expo


// import aboutanimation from "./animation/about.json";

const About = () => {
  return (
   <> 
   <div className="w-full p-4 ">
    <h2 className="text-[30px] font-bold text-white text-center xl:text-left">About Me</h2>
   </div>
    <main className="w-[100%]  left-0 py-24 flex flex-col xl:flex-row">
        <div className="w-[100%]  ">
            {/* <div className="w-[498px] h-[498px] xl:w-[298px] xl:h-[298px]">
              {/* <DotLottieReact 
                src="https://lottie.host/65d8f30e-d617-49d5-b21e-90cf6a989b40/1BBmT6VP71.lottie" 
                autoplay
                className="object-contain "
                /> */}

              {/*}  <Image 
                  src="/demain.png" 
                  priority quality={100} 
                  fill
                  alt=""
                  className="object-contain"
                /> */}

                <AboutPhoto />
 {/* border-2 border-white */}
            </div>
            <div className=" flex flex-col w-[100%] text-center xl:items-start xl:text-left">
              <div className="">
                <h2 className="text-[30px] font-bold text-white">Fullstack software developer & <br /> UI/UX designer.</h2>
                <p className="text-[16px] font-semibold text-gray-500 w-[80%] mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>
                <p><FaReact /></p>
              </div>
            </div>
        
    </main>
   </> 
  )
}

export default About