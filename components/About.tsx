// https://lottie.host/65d8f30e-d617-49d5-b21e-90cf6a989b40/1BBmT6VP71.lottie
"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import Image from "next/image";
import AboutPhoto from "./AboutPhoto";
// import Photo from "./Photo";
import { FaTwitter } from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";




// About

// Me Education Skills  WorkExperience

// Techmologies React Next Appwrite Expo


// import aboutanimation from "./animation/about.json";

const About = () => {
  return (
   <> 
   <div className="w-full p-4 ">
    <h2 className="text-[45px] font-bold text-white text-center">About Me</h2>
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
                <p className="text-[16px] font-semibold text-gray-500 w-[90%] md:-[80%] mx-auto xl:mx-0 mt-4">I’m a passionate and results-driven developer with a strong focus on creating clean, efficient, and scalable solutions. I enjoy building modern web and mobile applications that combine great user experiences with solid technical foundations. With a keen eye for detail and a commitment to continuous learning, I thrive on solving complex challenges and turning ideas into reality.</p>
                <div className="mt-8 flex gap-4 text-[24px] text-gray-500 W-full justify-center xl:justify-start">
                  <FontAwesomeIcon icon={faXTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faGithub} />
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <button className="w-[180px] h-[50px] text-[20px] mt-9 text-gray-900  bg-[#00ff99] rounded-[50px] font-bold">Hire Me</button>
              </div>
            </div>
        
    </main>
   </> 
  )
}

export default About