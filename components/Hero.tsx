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


 
const Hero = () => {
  return (
    <div className='h-full'>

      {/* Grid Section */}
      <div className="absolute -z-10 flex h-screen w-screen left-0 top-0 items-center justify-center dark:bg-grid-white/[0.3] bg-gray-900 dark:gray-900 text-[#2934454b]">
            <div
              className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#2934454b_1px,transparent_1px),linear-gradient(to_bottom,#2934454b_1px,transparent_1px)]",
              )}
            />
            {/* Radial gradient for the container to give a faded look */}
            {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
            {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
              Backgrounds
            </p> */}
      </div>


      <div className='mx-auto h-full'>
        
        <Spotlight />
        <Header />
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb- pb-4'>
          
          {/* Text */}
          <div className='text-center xl:text-left text-white order-2 xl:order-none'>
            <div className='flex items-center gap-2 justify-center xl:justify-start text-center'>
              <span className='w-6 h-6'>
                <FontAwesomeIcon icon={faCode} className=' text-[#00ff99] text-[20px]'/>
              </span>
              <span className='text-xl text-gray-300'>Software Developer</span>
            </div>
            <h1 className='text-[48px] xl:text-[80px] leading-[1.1] mb-6'>Hello, I'm <br /><span className='text-[#00ff99]'>Kelechi Kingsley</span></h1>
            <p className='max-w-[500px] mb-9 text-gray-300/80 font-normal'>I excel at crafting digital experiences and I am proficient in various programming languages and technologies.</p>
            
            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <button className='w-[180px] h-[50px] text-lg  bg-[#00ff99] flex justify-center items-center'>
                <span className='text-[#1c1c22] font-semibold uppercase'>Download CV</span>
                
              </button>
              <div className='mb-2 xl:mb-0'>
                <SocialIcons
                
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
        <Stats  />
      </div>
      
    </div>
  )
}

export default Hero;