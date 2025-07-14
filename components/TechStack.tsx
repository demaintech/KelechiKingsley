import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiAppwrite, SiExpo, SiNextdotjs, SiNodedotjs, SiPython, SiTailwindcss } from "react-icons/si"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const stacks = [
    {
        icon: <SiNextdotjs />,
        name: "NextJS",
    },

    {
        icon: <SiExpo />,
        name: "Expo",
    },

    {
        icon: <FaJs />,
        name: "JavaScript",
    },

    {
        icon: <SiAppwrite />,
        name: "Appwrite",
    },

    {
        icon: <FaCss3 />,
        name: "CSS 3",
    },

    {
        icon: <FaHtml5 />,
        name: "HTML 5",
    },

    {
        icon: <SiNodedotjs />,
        name: "NodeJs",
    },

    {
        icon: <SiTailwindcss />,
        name: "Tailwind",
    },

    {
        icon: <FaFigma />,
        name: "Figma",
    },
    
];

const stacksection = stacks.map(stack =>
    <Tooltip >
        <TooltipTrigger>
            <div
                className="w-[100px] h-[100px] bg-gray-800 flex justify-center items-center rounded-lg mx-auto xl:mx-0">
                <span className="text-[50px] mx-auto text-gray-500">
                    {stack.icon}
                </span>
            </div>
        </TooltipTrigger>
        <TooltipContent className="bg-gray-800 text-white font-bold text-[16px]">
            {stack.name}
        </TooltipContent>
    </Tooltip>
);

const TechStack = () => {
  return (
    <div>
        <div className='w-full p-4 py-24'>
            <h2 className='text-[45px] font-bold text-white text-center '>Modern Technologies</h2>
            <p className='text-gray-500 text-[16px] w-[90%] xl:w-[50%] font-bold text-center mx-auto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque, odio veniam iste corporis enim. Distinctio.</p>
        </div>

        <div className="w-[100%] justify-center md:w-[80%] lg:[50%] flex flex-wrap gap-4 mx-auto">
            {stacksection}
        </div>
    </div>
  )
}

export default TechStack