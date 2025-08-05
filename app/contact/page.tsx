import Footer from '@/components/Footer'
import Hire from '@/components/Hire'
import { faArrowLeft, faContactBook, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { faFacebook, faInstagram, faLinkedin, faMedium, faTiktok, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Contact = () => {
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
        <h2 className='font-bold text-[40px] text-gray-900'>I'd love to hear from you</h2>
      </div>
{/* 
      <div className='w-full'>
        <div className="flex gap-4 text-[#8973EC] text-[28px]">
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faMedium} />
          <FontAwesomeIcon icon={faTiktok} />
        </div>
      </div> */}

    {/* contact form */}
      <div className='w-full flex justify-center items-center bg-gray-900 py-8 z-50 '>
        <div></div>
        <div className="xl:w-[70%] w-[90%]  mx-auto pt-24 xl:pt-0  flex justify-center items-center ">
          <form 
                    action="" 
                    className="w-[100%] md:w-[60%] mx-auto xl:mx-0 -mt-40 bg-gray-900  pt-6 h-[600px] border-2 gap-2 border-gray-800 rounded-[30px] flex flex-col items-center"
                    id="contactForm"
                >
                    <h2 
                        className="text-[25px] text-center text-white"
                    >Send me a message</h2>
                    <input 
                        required
                        type="text" 
                        placeholder="Full name"
                        className="bg-gray-800 outline-none mt-2 text-gray-500 text-[17px] font-bold border-2 border-gray-900 focus:border-[#8973EC] focus:text-[#8973EC] focus:bg-gray-900  pl-4 rounded-lg w-[90%] h-[58px]"
                    />

                    <div className="flex justify-between items-center mx-auto w-[90%] gap-4">
                        <input 
                            required
                            type="email" 
                            placeholder="Email"
                            className="bg-gray-800 outline-none mt-2 text-gray-500 text-[17px] font-bold border-2 border-gray-900 focus:border-[#8973EC] focus:text-[#8973EC] focus:border-2 focus:bg-gray-900 pl-4 rounded-lg w-[80%]  h-[58px]"
                        />

                        <input 
                            required
                            type="tel" 
                            placeholder="Phone number"
                            className="bg-gray-800 outline-none mt-2 text-gray-500 text-[17px] font-bold border-2 border-gray-900 focus:border-[#8973EC] focus:text-[#8973EC] focus:bg-gray-900  pl-4 rounded-lg w-[80%]  h-[58px] "
                        />
                    </div>

                    <Select >
                        <SelectTrigger 
                            className="w-[90%] h-[60px] bg-gray-800 border-none outlin-none mt-4  text-gray-500 text-[17px] font-boldtext-[17px] font-bold  "
                        >
                                <SelectValue 
                                    placeholder="Select a service"
                                />
                        </SelectTrigger>    
                        <SelectContent 
                            className="bg-gray-800 text-gray-500 border-none outline-none "
                        >
                            <SelectGroup>
                                <SelectLabel>Select a service</SelectLabel>
                                <SelectItem 
                                    value="web"
                                >
                                Web development</SelectItem>
                                <SelectItem 
                                    value="mobile"
                                >
                                Mobile development</SelectItem>
                                <SelectItem 
                                    value="uiux"
                                >
                                UI/UX</SelectItem>
                                <SelectItem 
                                    value="googlebus"
                                >
                                Google Business</SelectItem>
                                <SelectItem 
                                    value="seo">SEO</SelectItem>
                                <SelectItem 
                                    value="branding"
                                >
                                Branding</SelectItem>
                                <SelectItem 
                                    value="blockchain"
                                >
                                Blockchain</SelectItem>
                                <SelectItem 
                                    value="techedu"
                                >
                                Tech Education</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <textarea 
                        name="" 
                        id="" 
                        className="bg-gray-800 outline-none mt-2 text-gray-500 text-[17px] font-bold border-2 border-gray-900 focus:border-[#8973EC] focus:bg-gray-900 focus:text-[#8973EC]  pl-4 rounded-lg w-[90%] h-[160px] p-4 "
                        placeholder="Your message"
                    ></textarea>

                    <button className="w-[90%] h-[50px] bg-[#8973EC] border-none outline-none hover:opacity-75 rounded-lg mt-4 text-[17px] font-bold text-gray-900 sendButton">Send message</button>
                </form>
        </div>
      </div>

      <div className='py-20 hirebtn'>
        <h2 className='text-white font-bold text-[40px] text-center'>Got a Project? Let's Talk.</h2>
        <p className='text-gray-500 text-[16px] xl:w-[90%] font-bold text-center mx-auto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque, odio veniam iste corporis enim. Distinctio. </p>
        <div className='w-full flex justify-center items-center flex-col md:flex-row mt-6 gap-4'>
          <button 
            className='w-[200px] h-[50px] bg-[#8973EC] text-gray-900 text-[17px] font-bold  hover:opacity-75 cursor-pointer flex justify-center items-center gap-2'
          >
            <span className=''>
              <FontAwesomeIcon icon={faDownload} />
            </span>
            Download CV</button>
          <button 
            className='w-[150px] h-[50px] bg-[#8973EC] text-gray-900 text-[17px] font-bold hover:opacity-75 cursor-pointer flex justify-center items-center gap-2'
           >
            <span className=''>
              <FontAwesomeIcon icon={faContactBook} />
            </span>
              Contact me</button>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  )
}

export default Contact