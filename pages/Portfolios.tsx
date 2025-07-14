"use client";

import { faArrowRight, faClose, faCode, faHeart, faLink, faPen, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// import Image from "next/image";

//  const [openModal, setOpenModal] = useState(false);

const portfolios = [
    {
        name: "Zyntel Finance",
        type: "Website",
        image: "/portfolio3.jpeg",
        description: "explicabo repellendus ex provident perferendis ",
        accent: "",
        // url: "/portfolio3.jpeg",
        alt: "",
        like: true,
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
//  const [openModal, setOpenModal] = useState(false);
//  const [openModal, setOpenModal] = useState(false);

const portfoliosection = portfolios.map((portfolio, index) =>
  // const [openModal, setOpenModal] = useState(false);

  <div className="w-[330px] h-[400px] bg-gray-800 flex flex-col rounded-4xl">
    <div 
    style={{ backgroundImage: `url(${portfolio.image})` }}
    key={index}
    className="w-[330px] h-[75%] rounded-t-4xl bg-cover bg-center mx-auto xl:mx-0" >
    {/* <Image src={portfolio.image}  alt={portfolio.alt} width={100} height={100} objectFit="cover" className="w-[100%] h-[100%] object-cover opacity-60"/> */}
    </div>
    <div className=" p-4 w-[100%] flex flex-col justify-between items-center">
      <div></div>
      <div  className="w-[100%]">
        <h1 className="text-3xl  font-bold text-white">{portfolio.name}</h1> {/* text-[#7752e8d8] */}
        <p className="text-gray-500 text-[14px] w-[90%]">{portfolio.description}</p>
        <div className="flex justify-between items-center w-[100%] pt-4 ">
          {/* <div className="flex items-center gap-[2px]">
            <span className="text-white">
              <FontAwesomeIcon icon={faLink} />
            </span>
            <h2 className="text-white font-semibold">visit site</h2>
          </div> */}

          <button 
            // onClick={() => setOpenModal(true)}
            className="w-[50px] h-[50px] border-2 border-white rounded-full flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        <div>
          <span className={`text-[30px]  mt-6  ${portfolio.like === true ? "text-[#00ff99]" : "text-white"}`}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
      </div>
      
    </div>
  </div>
</div>

);



const Portfolios = () => {
  // const [openModal, setOpenModal] = useState(false);
  
  return (
    <main className="w-full">
      <div className="xl:w-[80%] gap-8 justify-center  w-[90%] mx-auto py-12 flex flex-wrap">
        {portfoliosection}
      </div>

      <div className="w-full">
        {/* <h2 className="text-gray-500 text-center text-[20px] font-bold mt-6">view all...</h2> */}
      </div>
 
    {/* Portfolio contents modal ${openModal ? "flex" : "hidden"}*/}
      <div className={` flex w-full h-[100vh]  bg-[rgba(0,0,0,40%)] hidden fixed left-0 top-0 z-50 justify-center items-center`}>
        <div className="w-[70%] h-[60%] flex flex-row backdrop-blur-lg rounded-4xl border-[2px] border-gray-800">

          {/* Image Section */}
          <div className="w-[35%] h-[100%] bg-white rounded-l-4xl bg-cover bg-center portfolioContent">.</div>

          {/* Text Section */}
          <div className="w-[65%]">

            {/* Head Section */}
            <div className="w-[100%] h-[100%] flex flex-col justify-between">

            {/* Header (TOP) */}
              <div className="flex w-[100%] justify-between items-center p-6 text-white">
              <h2 className="text-[30px] font-semibold">Zyntel Finance</h2>
              <button className="bg-transparent border-none outline-none text-white text-[20px] font-bold">
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            <div  className="w-[100%] flex flex-col pl-6">
              
              {/* Product descrption */}
              <div className="">
                <p className="text-gray-500 text-[18px] font-semibold w-[80%] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et recusandae odit doloremque? Nam, quaerat dolore! Odio labore quos praesentium ullam est? Nemo dolorum veniam tempore est suscipit enim ipsa sit.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolore rerum accusamus rem suscipit dolor itaque odio earum, est quasi obcaecati dolorem fuga aspernatur. Distinctio animi accusantium nobis reprehenderit. Harum?</p>
              </div>
              <div className="mt-4">
                <div className="flex flex-row gap-4">
                  <span className="text-gray-500 text-[18px] font-bold">
                    <FontAwesomeIcon icon={faPen} /> 
                  </span>
                  <h4 className="text-gray-500 uppercase font-semibold">fintech</h4>
                </div>

                <div className="flex flex-row gap-4 mt-4">
                  <span className="text-gray-500 text-[18px] font-bold">
                    <FontAwesomeIcon icon={faCode} /> 
                  </span>
                  <h4 className="text-gray-500 uppercase font-semibold">web</h4>
                </div>

                <div className="flex flex-row gap-4 mt-4">
                  <span className="text-gray-500 text-[18px] font-bold">
                    <FontAwesomeIcon icon={faLink} /> 
                  </span>
                  <h4 className="text-gray-500 text-[17px] font-semibold">www.zyntel.com</h4>
                </div>

                <div className="flex flex-row gap-4 mt-6">
                  <h4 className="text-gray-500 uppercase font-semibold underline">visit site</h4>
                  <span className="text-gray-500 text-[18px] font-bold">
                    <FontAwesomeIcon icon={faArrowRight} /> 
                  </span>
                </div>
              </div>
              {/* <h5 className="text-gray-500 text-[17px] font-semibold">WEB</h5> */}
            </div>


            {/* Footer */}
            <div className="p-6 text-gray-500 flex items-center gap-2">
              <span className="font-bold text-[18px]">
                <FontAwesomeIcon icon={faSeedling} />
              </span>
              <h2 className="text-[17px] font-semibold">developed by Kelechi Kingsley.</h2>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Portfolios;