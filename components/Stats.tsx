"use client";

import CountUp from "react-countup";
// import { Spotlight } from "./ui/Spotlight";

const stats =[
  {
    num: 12,
    text: "Years of Experience",
  },

  {
    num: 260,
    text: "Projects Completed",
  },

  {
    num: 45,
    text: "Happy Clients",
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
  <div key={index} className="w-[40%] pb-3 md:w-auto border-b-[2px] border-b-[#8973EC] md:border-b-transparent flex flex-col lg:flex-row justify-center xl:justify-start text-center xl:text-left mx-auto xl:mx-0 items-center gap-4">
    <div>
      <CountUp
        end={stat.num} 
        duration={5} delay={2} 
        className="text-[37px] md:text-[50px] xl:text-5xl font-extrabold mt-4 text-[#8973EC] statnum"
      />
    </div>
    <div>
      <h5 className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} md:text-2xl text-[17px] font-bold text-gray-200`}>{stat.text}</h5>
    </div>
  </div>

)

const Stats = () => {
  return (
    <section className="w-[60%] gap-6 md:w-full py-12 border-[#8973EC] border-2 bg-transparent rounded-3xl mx-auto flex flex-col md:flex-row items-center justify-evenly mt-24 xl:-mt-24">
      {statsection}
    </section>
  )
}

export default Stats;