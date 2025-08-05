// https://lottie.host/65d8f30e-d617-49d5-b21e-90cf6a989b40/1BBmT6VP71.lottie
"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import AboutPhoto from "./AboutPhoto";
// import Photo from "./Photo";
import { FaTwitter } from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const About = () => {

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
      .fromTo('.abouttitle', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })

    
  gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
      .fromTo('#aboutText', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })
      .fromTo('#aboutImg', { opacity: 0, x: 200 }, { opacity: 1, x: 0 })


   gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
      .fromTo('#aboutcount', { y: '0' }, { y: '600px' })

  }, []);

  return (
   <> 
   <div className="w-full p-4 mt-60 xl:mt-0 pb-20 " id="about">
    {/* <div className="w-[100px] h-[100px] bg-white absolute  mr-4 right-0" id="aboutcount"> </div> */}
    <h2 className="text-[45px] font-bold text-white text-center abouttitle">About Me</h2>
   </div>
    <main className="w-[100%] pb-40  left-0 justify-center items-center py-24 flex flex-col xl:flex-row">
        <div className="w-[50%] flex justify-center items-center">
            <div className="w-[300px] h-[300px] scale-200 mix-blend-lighten ">
              {/* <DotLottieReact 
                src="https://lottie.host/65d8f30e-d617-49d5-b21e-90cf6a989b40/1BBmT6VP71.lottie" 
                autoplay
                className="object-contain "
                />  */}

               <Image 
                  src="/me.png" 
                  priority quality={100} 
                  fill
                  alt=""
                  className="object-contain shadow-md"
                  id="aboutImg"
                />

                {/* <AboutPhoto /> */}
              
              {/* border-2 border-white */}
            </div>
          </div>
            <div className=" flex flex-col xl:w-[60%] mt-[200px] xl:mt-0 text-center xl:items-start xl:text-left" id="aboutText">
              <div className="">
                <h2 className="text-[30px] font-bold text-white">Fullstack software developer & <br /> UI/UX designer.</h2>
                <p className="text-[16px] font-semibold text-gray-500 w-[90%] md:w-[80%]  mx-auto xl:mx-0 mt-4">I’m a passionate and results-driven developer with a strong focus on creating clean, efficient, and scalable solutions. I enjoy building modern web and mobile applications that combine great user experiences with solid technical foundations. With a keen eye for detail and a commitment to continuous learning, I thrive on solving complex challenges and turning ideas into reality.</p>
                <div className="mt-8 flex gap-4 text-[24px] text-gray-500 W-full justify-center xl:justify-start">
                  <FontAwesomeIcon icon={faXTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faGithub} />
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <button className="w-[180px] h-[50px] text-[20px] mt-9 text-gray-900  bg-[#8973EC] rounded-[50px] font-bold">Hire Me</button>
              </div>
            </div>
        
    </main>
   </> 
  )
}

export default About