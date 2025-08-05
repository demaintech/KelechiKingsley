import Header from '@/components/Header'
import Portfolios from '@/components/Portfolios'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <main className='w-full'>
      <div className='w-full absolute top-0 left-0 z-50 p-6'>
        <Link href="/">
          <div className='w-[60px] h-[60px] border-3 border-gray-900 rounded-full flex justify-center items-center'>
            <span className='text-gray-900 text-[25px] font-bold'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
          </div>
        </Link>
      </div>
      <div className='py-24 w-full text-center bg-[#8973EC] h-[400px] '>
        <h2 className='font-bold text-[40px] text-gray-900'>My Completed  projects</h2>
      </div>

      <div className='w-[95%] md:w-[70%] rounded-3xl bg-gray-900 py-8 -mt-32 mx-auto'>
        {/* <h2 className='text-[25px] font-bold text-center text-white'>Categories</h2> */}
        <div className="pt-16  w-full">
            <div className="w-full h-full relative">
                <Tabs
                    defaultValue="all"
                    className="mx-auto w-[100%] "
                >
                    <TabsList className="flex justify-center items-center gap-2 lg:gap-8  text-[20px] font-bold ">
                        <TabsTrigger 
                            className="bg-gray-800 text-gray-500 w-[50px] h-[50px] p-2 rounded-[50px] cursor-pointer"
                            value="all"
                        >All</TabsTrigger>
                        <TabsTrigger 
                            className="bg-gray-800 text-gray-500 w-[50px] h-[50px] p-2 rounded-[50px] cursor-pointer"
                            value="web"
                        >Web</TabsTrigger>
                        <TabsTrigger 
                            className="bg-gray-800 text-gray-500 w-[50px] h-[50px] p-2 rounded-[50px] cursor-pointer"
                            value="mobile">Mobile</TabsTrigger>
                        <TabsTrigger 
                            className="bg-gray-800 text-gray-500 w-[50px] h-[50px] p-2 rounded-[50px] cursor-pointer"
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
    </main>
  )
}

export default Projects