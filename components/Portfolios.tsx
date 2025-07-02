"use client";

import { faHeart, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";

const portfolios = [
    {
        name: "Zyntel Finance",
        type: "Website",
        image: "/portfolio3.jpeg",
        description: "explicabo repellendus ex provident perferendis ",
        accent: "",
        // url: "/portfolio3.jpeg",
        alt: "",
    },


    {
        name: "Harvy IT",
        type: "Website",
        image: "/busweb3.jpeg",
        description: "explicabo repellendus ex provident perferendis ",
        accent: "",
        // url: "/portfolio3.jpeg",
        alt: "",
    },  


    {
        name: "Harvy IT",
        type: "Website",
        image: "/busweb4.jpeg",
        description: "explicabo repellendus ex provident perferendis ",
        accent: "",
        // url: "/portfolio3.jpeg",
        alt: "",
    }, 


    {
        name: "Harvy IT",
        type: "Website",
        image: "/busweb5.jpeg",
        description: "explicabo repellendus ex provident perferendis ",
        accent: "",
        // url: "/portfolio3.jpeg",
        alt: "",
    }, 


    {
        name: "Harvy IT",
        type: "Website",
        image: "/busweb5.jpeg",
        description: "explicabo repellendus ex provident perferendis ",
        accent: "",
        // url: "/portfolio3.jpeg",
        alt: "",
    }, 


];


const portfoliosection = portfolios.map((portfolio, index) =>
  <div 
    style={{ backgroundImage: `url(${portfolio.image})` }}
    key={index}
    className="w-[250px] h-[400px]  bg-cover bg-center mx-auto xl:mx-0" >
    {/* <Image src={portfolio.image}  alt={portfolio.alt} width={100} height={100} objectFit="cover" className="w-[100%] h-[100%] object-cover opacity-60"/> */}
    
    <div className=" p-4 w-[100%] h-[100%] portfolioBg flex flex-col justify-between items-center">
      <div>.</div>
      <div>
        <h1 className="text-3xl  font-bold text-blue-600">{portfolio.name}</h1> {/* text-[#7752e8d8] */}
        <p className="text-white text-[14px] w-[90%]">{portfolio.description}</p>
        <div className="flex justify-between items-center max-w-[220px] pt-4 ">
          <div className="flex items-center gap-[2px]">
            <span className="text-white">
              <FontAwesomeIcon icon={faLink} />
            </span>
            <h2 className="text-white font-semibold">visit site</h2>
          </div>
        <div>
          <span className="text-[30px]  mt-6 text-white">
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
      </div>
      </div>
    </div>
  </div>
);



const Portfolios = () => {
  return (
    <main>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 xl:gap-4">
        {portfoliosection}
      </div>

      <div className="w-full">
        <h2 className="text-gray-500 text-center text-[20px] font-bold mt-6">view all...</h2>
      </div>
    </main>
  )
}

export default Portfolios;