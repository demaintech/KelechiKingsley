import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiAppwrite, SiExpo, SiNextdotjs, SiNodedotjs, SiPython, SiTailwindcss } from "react-icons/si"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";


const stacks = [
    {
        id: "nextjs",
        icon: <SiNextdotjs />,
        name: "NextJs",
    },

    {
        id: "expo",
        icon: <SiExpo />,
        name: "Expo",
    },

    {
        id: "javascript",
        icon: <FaJs />,
        name: "JavaScript",
    },

    {
        id: "appwrite",
        icon: <SiAppwrite />,
        name: "Appwrite",
    },

    {
        id: "css",
        icon: <FaCss3 />,
        name: "CSS 3",
    },

    {
        id: "html",
        icon: <FaHtml5 />,
        name: "HTML 5",
    },

    {
        id: "nodejs",
        icon: <SiNodedotjs />,
        name: "NodeJs",
    },

    {
        id: "tailwind",
        icon: <SiTailwindcss />,
        name: "Tailwind",
    },

    {
        id: "figma",
        icon: <FaFigma />,
        name: "Figma",
    },
    
];

const stacksection = stacks.map(stack =>
    <Tooltip >
        <TooltipTrigger>
            <div
                className="w-[100px] h-[100px] bg-gray-800 flex justify-center items-center rounded-lg mx-auto xl:mx-0" 
                id={stack.id}
                >
                <span className="text-[50px] mx-auto text-[#8973EC]">
                    {stack.icon}
                </span>
            </div>
        </TooltipTrigger>
        <TooltipContent className="bg-gray-800 text-[#8973EC] font-bold text-[16px]">
            {stack.name}
        </TooltipContent>
    </Tooltip>
);

const TechStack = () => {

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#techstack',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,

        }})
            .fromTo('#techstacktext', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })


        gsap.timeline({
            scrollTrigger: {
                trigger: '#techstack',
                start: 'top bottom',
                end: 'top 50vh',
                scrub: true,

        }})
            .fromTo('#nextjs', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })

         gsap.timeline({
            scrollTrigger: {
                trigger: '#techstack',
                start: 'top bottom',
                end: 'top 50vh',
                scrub: true,

        }})
            .fromTo('#expo', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })

         gsap.timeline({
            scrollTrigger: {
                trigger: '#techstack',
                start: 'top bottom',
                end: 'top 50vh',
                scrub: true,

        }})
            .fromTo('#appwrite', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })

         gsap.timeline({
            scrollTrigger: {
                trigger: '#techstack',
                start: 'top bottom',
                end: 'top 50vh',
                scrub: true,

        }})
            .fromTo('#css', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })


         gsap.timeline({
            scrollTrigger: {
                trigger: '#techstack',
                start: 'top bottom',
                end: 'top 50vh',
                scrub: true,

        }})
            .fromTo('#html', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })

         gsap.timeline({
            scrollTrigger: {
                trigger: '#techstack',
                start: 'top bottom',
                end: 'top 50vh',
                scrub: true,

        }})
            .fromTo('#nodejs', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })

         gsap.timeline({
            scrollTrigger: {
                trigger: '#techstack',
                start: 'top bottom',
                end: 'top 50vh',
                scrub: true,

        }})
            .fromTo('#tailwind', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })

         gsap.timeline({
            scrollTrigger: {
                trigger: '#techstack',
                start: 'top bottom',
                end: 'top 50vh',
                scrub: true,

        }})
            .fromTo('#figma', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })

         gsap.timeline({
            scrollTrigger: {
                trigger: '#techstack',
                start: 'top bottom',
                end: 'top 50vh',
                scrub: true,

        }})
            .fromTo('#javascript', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })

    }, [])
        

  return (
    <div id="techstack">
        <div className='w-full p-4 py-24 pt-40'>
            <h2 className='text-[45px] font-bold text-white text-center ' id="techstacktext">Modern Technologies</h2>
            <p className='text-gray-500 text-[16px] w-[90%] xl:w-[50%] font-bold text-center mx-auto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque, odio veniam iste corporis enim. Distinctio.</p>
        </div>

        <div className="w-[100%] justify-center md:w-[80%] lg:[50%] flex flex-wrap gap-4 mx-auto">
            {stacksection}
        </div>
    </div>
  )
}

export default TechStack