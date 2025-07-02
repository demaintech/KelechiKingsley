import Contact from "./Contact";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import SectionCount from "./SectionCount";
import Service from "./Service";
import TechStack from "./TechStack";


const sections = () => {
  return (
    <main className='w-full flex mt-24 bg-gray-900'>

    {/* Numbers */}
        <div className="hidden lg:block">
            <SectionCount />
        </div>

    {/* Sections */}
        <div className="w-[100%]">
          <About />
          <Service />
          <TechStack />
          <Resume />
          <Portfolio />
          <Contact />
        </div>
    </main>
  )
}

export default sections;