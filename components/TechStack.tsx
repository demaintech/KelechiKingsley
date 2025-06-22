import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiAppwrite, SiExpo, SiNodedotjs, SiPython, SiTailwindcss } from "react-icons/si"


const stacks = [
    {
        icon: <FaReact />,
    },

    {
        icon: <SiExpo />,
    },

    {
        icon: <FaJs />,
    },

    {
        icon: <SiAppwrite />,
    },

    {
        icon: <FaCss3 />,
    },

    {
        icon: <FaHtml5 />,
    },

    {
        icon: <SiNodedotjs />,
    },

    {
        icon: <SiTailwindcss />,
    },

    {
        icon: <FaFigma />,
    },
    
];

const stacksection = stacks.map(stack =>
    <div className="w-[100px] h-[100px] bg-gray-800 flex justify-center items-center rounded-lg mx-auto xl:mx-0">
        <span className="text-[50px] mx-auto text-gray-500">
            {stack.icon}
        </span>
    </div>
);

const TechStack = () => {
  return (
    <div>
        <div className='w-full p-4 py-24'>
            <h2 className='text-[30px] font-bold text-white text-center xl:text-left'>Modern Technologies</h2>
            <p className='text-gray-500 text-[16px] w-[90%] xl:w-[50%] font-bold text-center xl:text-left mx-auto xl:mx-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque, odio veniam iste corporis enim. Distinctio.</p>
        </div>

        <div className="w-full flex flex-wrap gap-4">
            {stacksection}
        </div>
    </div>
  )
}

export default TechStack