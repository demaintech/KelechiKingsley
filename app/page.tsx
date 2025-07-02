// import About from "@/components/About";
import Hero from "@/components/Hero";
import Section from "@/components/sections";
// import { Spotlight } from '../components/ui/Spotlight';
// import Image from "next/image";

// →

export default function Home() {
  return (
    <main  className="w-full relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-full">
        {/* <Spotlight className='top-0 absolute'/> */}
        <Hero />
        <Section />
      </div>
    </main>
  );
}
