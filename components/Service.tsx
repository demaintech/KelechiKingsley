import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCode } from "react-icons/fa";
import ServicePhoto from "./ServicePhoto";

const services= [
    {
        title: "Web development",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaCode />,
    },

     {
        title: "Mobile development",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaCode />,
    },

     {
        title: "UI/UX",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaCode />,
    },

     {
        title: "Branding",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaCode />,
    },

     {
        title: "Google Business",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaCode />,
    },

     {
        title: "Blockchain",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaCode />,
    },

     {
        title: "SEO",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaCode />,
    },

     {
        title: "Tech Education",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaCode />,
    },
];


const servicesection = services.map(service =>
    <div className="flex justify-between w-[350px] h-[150px] p-4 gap-4 ">
        <div>
            <span className="text-[40px] w-[30px] h-[30px] bg-white text-white">
                {service.icon}
            </span>
        </div>
        <div>
            <h2 className="text-[20px] font-bold text-white">{service.title}</h2>
            <p className="text-[15px] font-bold w-[90%] text-gray-500">{service.description}</p>
        </div>
    </div>
);

const Service = () => {
  return (
    <div className="mt-8">
        <div className='w-full p-4'>
            <h2 className='text-[30px] font-bold text-white text-center xl:text-left'>My Services</h2>
        </div>
        <div className='w-full py-16 flex items-center justify-between'>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%] x:w-[50%] mx-auto xl:mx-0">
                {servicesection}
            </div>
            <div className="hidden xl:block">
                <ServicePhoto />
            </div>
        </div>
    </div>
  )
}

export default Service