// Components
import Photo from './Photo';
import SocialIcons from './SocialIcons';
import Stats from './Stats';
import Header from './Header';


// Ui Components
import { Spotlight } from './ui/Spotlight';
import { cn } from "@/lib/utils";

// Dependecies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';

// gsap.registerPlugin(ScrollTrigger, SplitText);



const Hero = () => {


//     useGSAP(() => {
//       const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power2.inOut" } });

//       tl.fromTo('.myname', { opacity: 0, x: -120 }, { opacity: 1, x: 0 })
//         .fromTo('.description', { opacity: 0, x: -120 }, { opacity: 1, x: 0 }, "-=0.5")
//         .fromTo('.downloadcv', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, "-=0.5")
//         .fromTo('.socialicons', { opacity: 0, x: 80 }, { opacity: 1, x: 0 }, "-=0.5")
//         .fromTo('.jobtitle', { opacity: 0, y: -80 }, { opacity: 1, y: 0 });

//         tl.fromTo('.mynamemobile', { opacity: 0, y: 120 }, { opacity: 1, y: 0 }, )
//           .fromTo('.descriptionmobile', { opacity: 0, y: 120 }, { opacity: 1, y: 0 })
//           .fromTo('.downloadcvmobile', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, "-=0.5")
//           .fromTo('.socialiconsmobile', { opacity: 0, x: 80 }, { opacity: 1, x: 0 }, "-=0.5")
//           .fromTo('.jobtitlemobile', { opacity: 0, y: -50 }, { opacity: 1, y: 0 });
// }, []);

// useGSAP(() => {
//   gsap.timeline({
//     scrollTrigger:{
//       trigger: '#hero',
//       start: 'top top',
//       end: 'bottom top',
//       scrub: true,
//     }
//   })

//   .to('#circle', {y: 400}, 0)
// })


  // gsap.from(paragraghSplit.lines, {
  //   opacity: 0,
  //   yPercent: 100,
  //   duration: 1.8,
  //   ease: 'expo.out',
  //   stagger: 0.05,
  // })



useGSAP(() => {
  const heroSplit = new SplitText('.myname ', {type: 'chars, words'});
  const paragraghSplit = new SplitText('.description', {type: 'lines'});

  heroSplit.chars.forEach((char) => char.classList.add('opacity-75'));

  const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power2.inOut" } });

  tl.fromTo('.myname', { opacity: 0, y: 120 }, { opacity: 1, y: 0 })
      .fromTo('.description', { opacity: 0, y: 120 }, { opacity: 1, y: 0 })
      .fromTo('.downloadcv', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, "-=0.5")
      .fromTo('.socialicons', { opacity: 0, x: 80 }, { opacity: 1, x: 0 }, "-=0.5")
      .fromTo('.jobtitle', { opacity: 0, y: -80 }, { opacity: 1, y: 0 })
      .fromTo('.stats', { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=0.5");

}, []);

  return (
    <div className='h-full'>

      {/* Navbar  on scroll up */}

      {/* Grid Section */}
      <div className="absolute -z-10 flex h-screen w-screen left-0 top-0 items-center  justify-center dark:bg-grid-white/[0.3] bg-gray-900 dark:gray-900 text-[#2934454b]">
            <div
              className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#1e2939_1px,transparent_1px),linear-gradient(to_bottom,#1e2939_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#2934454b_1px,transparent_1px),linear-gradient(to_bottom,#2934454b_1px,transparent_1px)]",
              )}
            />
            {/* Radial gradient for the container to give a faded look */}
            {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
            {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
              Backgrounds
            </p> */}
      </div>


      <div className='w-full h-screen flex flex-col xl:items-center mx-auto  xl:justify-center'>
        
        
        {/* <Header /> */}
        <div className='w-full flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb- pb-4 pt-40 '>
          
          {/* Text */}
          <div className='text-center xl:text-left text-white order-2 xl:order-none '>
            <div className='flex items-center gap-2 mb-3 justify-center xl:justify-start text-center jobtitle'>
              <span className='w-6 h-6'>
                <FontAwesomeIcon icon={faCode} className=' text-[#8973EC] text-[20px]'/>
              </span>
              <span className='text-xl text-gray-300 '>Software Developer</span>
            </div>
            <h1 className="myname text-[43px] xl:text-[80px] leading-[1.1] mb-4 md:mb-6">Hello, I&#39;m <br /><span className='text-[#8973EC]'>Kelechi Kingsley</span></h1>
            <p className='description max-w-[500px] mb-9 text-gray-300/80 font-normal'>I excel at crafting digital experiences and I am proficient in various programming languages and technologies.</p>
            
            {/* btn and socials */}
            <div className='flex xl:flex-row items-center gap-6 md:gap-8'>
              <button className='w-[180px] h-[50px] text-lg  bg-[#8973EC] downloadcv  hover:opacity-75 flex justify-center items-center'>
                <span className='text-[#1c1c22] font-semibold uppercase '>Download CV</span>
                
              </button>
              <div className='mb-2 xl:mb-0 socialicons'>
                <SocialIcons
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0' id='circle'>
            <Photo />
          </div>
        </div>
        <div className='w-full stats text-left'>
          {/* <Stats  /> */}
        </div>
      </div>
      
    </div>
  )
}

export default Hero;