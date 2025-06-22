import Image from "next/image";

const portfolio = [
    {
        name: "Krypt Access",
        category: "Web",
        description: "",
        image: "",
        url: "",
    },
];

const Portfolio = () => {
  return (
    <div>
        <div className="flex items-start">
            <div className='w-full p-4'>
                <h2 className='text-[30px] font-bold text-white text-center xl:text-left'>My Portfolio</h2>
                <p className='text-gray-500 text-[16px] xl:w-[70%] font-bold text-center xl:text-left mx-auto xl:mx-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque, odio veniam iste corporis enim. Distinctio. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum minus qui necessitatibus! Provident porro sunt, quis ex deleniti esse. Adipisci iste voluptates provident iusto, quia asperiores suscipit expedita vero!</p>
            </div>
            <div className="w-[100%]">
                <div className="w-full h-full relative">
                    <div className="boder-2 scale-200 border-white w-[298px] h-[298px] xl:w-[598px] xl:h-[598px]">
                        <Image 
                            src="/portfolio.png" 
                            priority quality={100} 
                            fill 
                            alt="" 
                            className="object-contain" 
                        />
                    </div>
                </div>
            </div>
        </div>

    {/* My Portfolio */}
        <div></div>
    </div>
  )
}

export default Portfolio;