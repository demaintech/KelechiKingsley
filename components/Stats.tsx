"use client";

import CountUp from "react-countup";
// import { Spotlight } from "./ui/Spotlight";

const stats =[
  {
    num: 12,
    text: "Years of Experience",
  },

  {
    num: 26,
    text: "Projects Completed",
  },

  {
    num: 45,
    text: "Happy Clients",
  },

  // {
  //   num: 100,
  //   text: "Code comits",
  // },
];

const statsection = stats.map((stat, index) =>
  <div key={index} className="flex flex-col lg:flex-row justify-center xl:justify-start text-center xl:text-left mx-auto xl:mx-0 items-center gap-4">
    <div>
      <CountUp 
        end={stat.num} 
        duration={5} delay={2} 
        className="text-4xl xl:text-5xl font-extrabold mt-4 text-white statnum"
      />
    </div>
    <div>
      <h5 className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} md:text-xl text-lg font-bold text-gray-300`}>{stat.text}</h5>
    </div>
  </div>

)

const Stats = () => {
  return (
    <section className="w-full flex flex-wrap gap-2 mx-auto mt-16 xl:-mt-4">
      {statsection}

      <div>
        
      </div>
    </section>
  )
}

export default Stats;