import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBookOpen, FaCode, FaDatabase, FaGlasses, FaMicroscope, FaMobile, FaNetworkWired, FaPen, FaStore, FaUikit } from "react-icons/fa";
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
        icon: <FaMobile />,
    },

     {
        title: "UI/UX",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaUikit />,
    },

     {
        title: "Branding",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaPen />,
    },

     {
        title: "Google Business",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaStore />,
    },

     {
        title: "Blockchain",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaNetworkWired />,
    },

     {
        title: "SEO",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaGlasses />,
    },

     {
        title: "Tech Education",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        icon: <FaBookOpen />,
    },
];


const servicesection = services.map(service =>
    <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between w-[350px] h-[150px] p-4 gap-4 mx-auto xl:mx-0 text-center xl:text-left">
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
            <h2 className='text-[45px] font-bold text-white text-center'>My Services</h2>
        </div>
        <div className='w-full py-16'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[100%] xl:w-[80%] mx-auto">
                {servicesection}
            </div>
            {/* <div className="hidden xl:block">
                <ServicePhoto />
            </div> */}
        </div>
    </div>
  )
}

export default Service