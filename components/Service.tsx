import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBookOpen, FaCode, FaDatabase, FaGlasses, FaMicroscope, FaMobile, FaNetworkWired, FaPen, FaStore, FaUikit } from "react-icons/fa";
import ServicePhoto from "./ServicePhoto";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const services= [
    {
        title: "Web development",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        id: "first",
        icon: <FaCode />,
    },

     {
        title: "Mobile development",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        id: "second",
        icon: <FaMobile />,
    },

     {
        title: "UI/UX",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        id: "third",
        icon: <FaUikit />,
    },

     {
        title: "Branding",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        id: "fourth",
        icon: <FaPen />,
    },

     {
        title: "Google Business",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        boxstyle: "smFifth xl:fifth",
        id: "fifth",
        icon: <FaStore />,
    },

     {
        title: "Blockchain",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        boxstyle: "smSixth xl:sixth",
        id: "sixth",
        icon: <FaNetworkWired />,
    },

     {
        title: "SEO",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        boxstyle: "smSeventh xl:seventh",
        id: "seventh",
        icon: <FaGlasses />,
    },

     {
        title: "Tech Education",
        description: "laudantium neque assumenda porro tenetur optio sunt praesentium ",
        boxstyle: "smEighth xl:eigth",
        id: "eigth",
        icon: <FaBookOpen />,
    },
];


const servicesection = services.map(service =>
    <div className={`flex flex-col xl:flex-row items-center xl:items-start justify-between w-[350px] h-[150px] p-4 gap-4 mx-auto xl:mx-0 text-center xl:text-left ${service.boxstyle}`} id={service.id}>
        <div>
            <span className="text-[40px] w-[30px] h-[30px] bg-white text-[#8973EC]">
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

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#service',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
        }
    })
      .fromTo('#serviceTitle', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })
      .fromTo('#aboutText', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })


        gsap.timeline({
            scrollTrigger: {
                trigger: '#serviceItems',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
        }
    })
        .fromTo('#first', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })
        .fromTo('#second', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })
        .fromTo('#third', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })
        .fromTo('#fourth', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })
        .fromTo('.smFifth', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })
        .fromTo('.smSixth', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })
        .fromTo('.smSeventh', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })
        .fromTo('.smEigth', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#serviceItems',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
        }
    })

    
        gsap.timeline({
            scrollTrigger: {
                trigger: '#serviceItems',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
        }
    })
        .fromTo('.fifth', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })
        .fromTo('.sixth', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })
        .fromTo('.seventh', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })
        .fromTo('.eigth', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })
    }, [])

  return (
    <div className="xl:pt-60 " id="service">
        <div className='w-full p-4'>
            <h2 className='text-[45px] font-bold text-white text-center' id="serviceTitle">My Services</h2>
        </div>
        <div className='w-full py-16'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[100%] xl:w-[80%] mx-auto " id="serviceItems"> 
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