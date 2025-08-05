import Image from "next/image";
import Portfolios from "./Portfolios";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";


// const portfolio = [
//     {
//         name: "Krypt Access",
//         category: "Web",
//         description: "",
//         image: "",
//         url: "",
//     },
// ];

const Portfolio = () => {

      useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#portfolio',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,

        }})
            .fromTo('#portfoliotext', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })
}, [])
  
  return (
    <div className="mt-[200px]" id="portfolio">
        <div className="">
            <div className='w-full p-4' >
                <h2 className='text-[45px] font-bold text-white text-center ' id="portfoliotext">My Portfolio</h2>
                <p className='text-gray-500 text-[16px] xl:w-[90%] font-bold text-center mx-auto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque, odio veniam iste corporis enim. Distinctio. <br /></p>
            </div>
        </div>

    {/* My Portfolio */}
        <div className="pt-16  w-full">
            <div className="w-full h-full relative">
                <Tabs
                    defaultValue="all"
                    className="mx-auto w-[90%] "
                >
                    <TabsList className="flex justify-center items-center gap-2 lg:gap-8  text-[20px] font-bold ">
                        <TabsTrigger 
                            className="bg-gray-800 text-gray-500 w-[130px] h-[50px] p-2 rounded-[50px] cursor-pointer"
                            value="all"
                        >All</TabsTrigger>
                        <TabsTrigger 
                            className="bg-gray-800 text-gray-500 w-[130px] h-[50px] p-2 rounded-[50px] cursor-pointer"
                            value="web"
                        >Web</TabsTrigger>
                        <TabsTrigger 
                            className="bg-gray-800 text-gray-500 w-[130px] h-[50px] p-2 rounded-[50px] cursor-pointer"
                            value="mobile">Mobile</TabsTrigger>
                        <TabsTrigger 
                            className="bg-gray-800 text-gray-500 w-[130px] h-[50px] p-2 rounded-[50px] cursor-pointer"
                            value="uiux">UI/UX</TabsTrigger>
                    </TabsList>

                    <div className="w-full py-12">
                        <TabsContent value="all">
                            <Portfolios />
                        </TabsContent>

                        <TabsContent value="web">
                            <Portfolios />
                        </TabsContent>

                        <TabsContent value="mobile">
                            <Portfolios />
                        </TabsContent>

                        <TabsContent value="UI/UX">
                            <Portfolios />
                        </TabsContent>
                    </div>
                </Tabs>

                {/* <TabsContent value="all">Hello</TabsContent> */}
            </div>    
        </div>
    </div>
  )
}

export default Portfolio;