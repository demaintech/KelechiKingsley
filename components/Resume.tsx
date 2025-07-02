"use client"





// about data
const About = {
  title: "About me",
  description: 
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad commodi cumque quaerat iusto provident, id culpa veniam quas necessitatibus qui molestiae ",

    info: [
      {
        fieldName: "Name",
        fieldValue: "Kelechi Kingsley"
      },

      {
        fieldName: "Phone",
        fieldValue: "+(234) 814 150 0971"
      },

      {
        fieldName: "Experience",
        fieldValue: "6+ Years "
      },

      {
        fieldName: "Skype",
        fieldValue: "dev_kingsley"
      },

      {
        fieldName: "Email",
        fieldValue: "KelechiKingsley2576@gmail.com"
      },


      {
        fieldName: "Language",
        fieldValue: "English"
      },
    ]
};

// experience
const experience = {
  icon: "",
  title: "My experience",
  description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius animi culpa quidem, ullam deserunt praesentium ",
  items: [
    {
      company: "Demain, Inc",
      position: "Software developer",
      duration: "2023 - Present",
    },

    {
      company: "Demain, Inc",
      position: "Software developer",
      duration: "2023 - Present",
    },

    {
      company: "Demain, Inc",
      position: "Software developer",
      duration: "2023 - Present",
    },

     {
      company: "Demain, Inc",
      position: "Software developer",
      duration: "2023 - Present",
    },

     {
      company: "Demain, Inc",
      position: "Software developer",
      duration: "2023 - Present",
    },

     {
      company: "Demain, Inc",
      position: "Software developer",
      duration: "2023 - Present",
    },
  ]
}


// education
const education = {
  icon: "",
  title: "My Education",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius animi culpa quidem, ullam deserunt praesentium ",
  items: [
    {
      institution: "Online Tech Class",
      degree: "Software  Boot camp",
      duration: "2023",
    },


    {
      institution: "Havard University",
      degree: "Computer science",
      duration: "2024",
    },


    {
      institution: "Design School",
      degree: "UI/UX",
      duration: "2025",
    }, 
] }

// skills
const skill = {
  title: "My Skills",
  description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius animi culpa quidem, ullam deserunt praesentium ",

  skillList:  [
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
  ]
}


import { 
  Tabs, 
  TabsContent, 
  TabsTrigger, 
  TabsList 

} from "./ui/tabs";

import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger

} from "./ui/tooltip";

import { ScrollArea } from "./ui/scroll-area";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiAppwrite, SiExpo, SiNextdotjs, SiNodedotjs, SiPython, SiTailwindcss } from "react-icons/si"



const Resume = () => {
  return (
    <div className="py-24 mt-2">
        <div className='w-full p-4 '>
            <h2 className='text-[45px] font-bold text-white text-center xl:text-left'>My Resume</h2>
            <p className='text-gray-500 text-[16px] xl:w-[50%] w-[90%] font-bold text-center xl:text-left mx-auto xl:mx-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque, odio veniam iste corporis enim. Distinctio.</p>
        </div>

        <div className="w-full mt-16">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row items-center justify-between"
          >
            <TabsList className="flex flex-col max-w-[380px] gap-8 text-[20px] font-bold">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skils</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

          {/* Content */}
          <div className="text-white w-[70%]">

          {/* Experience */}
            <TabsContent value="experience">
              <div className="flex flex-col text-center xl:text-left pt-8 xl:pt-0">
                <h2 className="text-[40px] font-bold">{experience.title}</h2>
                <p className="text-gray-500 text-[17px] font-bold w-[90%] mx-auto xl:mx-0 xl:w-[50%]">{experience.description}</p>

                <ScrollArea className="h-[400px] mt-8">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-gray-800 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                        <span className="text-[#00ff99]">{item.duration}</span>
                        <h2 className="min-h-[60px] text-[20px] font-bold">{item.position}</h2>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-[#00ff99] rounded-full"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          {/* Education */}
            <TabsContent value="education">
              <div className="flex flex-col text-center xl:text-left pt-8 xl:pt-0">
                <h2 className="text-[40px] font-bold">{education.title}</h2>
                <p className="text-gray-500 text-[17px] font-boldw-[90%] mx-auto xl:mx-0 xl:w-[50%]">{education.description}</p>

                <ScrollArea className="h-[400px] mt-8">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-gray-800 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                        <span className="text-[#00ff99]">{item.duration}</span>
                        <h2 className="min-h-[60px] text-[20px] font-bold">{item.degree}</h2>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-[#00ff99] rounded-full"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left pt-8 xl:pt-0">
                <div>
                  <h2 className="text-[40px] font-bold">{skill.title}</h2>
                  <p className="text-gray-500 text-[17px] font-bold w-[90%] mx-auto xl:mx-0 xl:w-[50%]">{skill.description}</p>
                </div>
                <div className="xl:w-[600px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skill.skillList.map((skill, index) => {
                    return <Tooltip >
                    <TooltipTrigger>
                      <div
                        className="w-[100px] h-[100px] bg-gray-800 flex justify-center items-center rounded-lg mx-auto xl:mx-0">
                        <span className="text-[50px] mx-auto text-gray-500">
                          {skill.icon}
                        </span>
                      </div>
                    </TooltipTrigger>
                      <TooltipContent className="bg-gray-800 text-white font-bold text-[16px]">
                        {skill.name}
                      </TooltipContent>
                    </Tooltip>
                  })}
                </div>
              </div>
            </TabsContent>

          {/* About me */}
            <TabsContent value="about">
              <div>
                <div className="flex flex-col text-center xl:text-left pt-8 xl:pt-0">
                  <h2 className="text-[40px] font-bold">{About.title}</h2>
                  <p className="text-gray-500 text-[17px] font-bold w-[90%] mx-auto xl:mx-0 xl:w-[50%]">{About.description}</p>

                  <ul>
                    {About.info.map((about, index) => {
                      <li key={index}>
                        <span>{about.fieldName}</span>
                      </li>
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
          </Tabs>
        </div>
    </div>
  )
}

export default Resume;