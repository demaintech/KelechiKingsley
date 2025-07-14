"use client";

import React from 'react';

// Dependencies
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

// compoents
import Portfolios from './Portfolios';

const Projects = () => {
  return (
    <main className='w-full flex items-center gap-24 flex-col '>
        <div className='w-full h-[100vh] projectSection'>
            <div className='w-[100%] h-[100%] flex justify-center items-center flex-col bg-[rgba(0,0,0,85%)] gap-6'>
                <h2 className='text-[60px] text-white font-bold'>Home / Projects</h2>
                <p className='text-gray-500 text-[16px] xl:w-[50%] font-bold text-center mx-auto '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo debitis saepe voluptatem quasi impedit, nulla iure pariatur dolores commodi, neque modi laboriosam suscipit harum quidem soluta consectetur blanditiis odit quos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque, odio veniam iste corporis enim. Distinctio. </p>

            </div>
        </div>
        <div>

        <div>
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
        </div>
    </main>
  )
}

export default Projects;