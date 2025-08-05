import { faFacebook, faInstagram, faLinkedin, faMedium, faTiktok, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faContactBook, faEnvelope, faLocationPin, faMapLocation, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectGroup,SelectItem, SelectLabel } from "./ui/select";
// import { Select, SelectValue, SelectTrigger, SelectContent, SelectGroup,SelectItem, SelectLabel } from "@radix-ui/react-select";
// import {  } from "@radix-ui/react-select";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Contact = () => {

useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
      .fromTo('#contacttitle', { opacity: 0, y: -200 }, { opacity: 1, y: 0 })

    gsap.timeline({
          scrollTrigger: {
            trigger: '#contact',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
          }
        })
        //   .fromTo('#contactForm', { opacity: 0, x: -200 }, { opacity: 1, x: 0 })
          .fromTo('#contactText', { opacity: 0, x: 200 }, { opacity: 1, x: 0 })

    gsap.timeline({
          scrollTrigger: {
            trigger: '#contact',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
          }
        })
          .fromTo('#contactForm', { opacity: 0, x: -200 }, { opacity: 1, x: 0 })
          .fromTo('#sendButton', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, "-=0.5")
        //   .fromTo('#contactText', { opacity: 0, y: 200 }, { opacity: 1, y: 0 })

    gsap.timeline({
          scrollTrigger: {
            trigger: '#contact',
            start: 'top bottom',
            end: 'top 50vh',
            scrub: true,
          }
        })
        //   .fromTo('#contactForm', { opacity: 0, x: -200 }, { opacity: 1, x: 0 })
          .fromTo('.sendButton', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 }, "-=0.5")

}, []);
  return (

    <div className="text-white pt-40 py-24" id="contact">
        <div className='w-full p-4'>
            <h2 className='text-[45px] font-bold text-white text-center' id="contacttitle">Contact me</h2>
            <p className='text-gray-500 text-[16px] xl:w-[90%] font-bold text-center mx-auto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque, odio veniam iste corporis enim. Distinctio. </p>
        </div>

        <div className="w-[100%]  mx-auto flex flex-col xl:flex-row justify-center  items-center py-30">
            <div className="xl:w-[50%]  w-[100%] xl:pl-40" id="contactText">
                <h2 className="text-white font-bold text-[40px] text-center xl:text-left">Any type of Query & <br /> Discussion</h2>
                <div className="flex gap-4 items-center justify-center xl:justify-start xl:items-start text-center xl:text-left text-[#8973EC] text-[28px] pt-8">
                    <FontAwesomeIcon icon={faXTwitter} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <FontAwesomeIcon icon={faMedium} />
                    <FontAwesomeIcon icon={faTiktok} />
                </div>

                <div className="pt-6 flex flex-col items-center xl:items-start  gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-[21px] text-[#8973EC]">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <h2 className="text-gray-500 text-[18px] font-bold">kelechikingsley2576@gmail.com</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[21px] text-[#8973EC]">
                            <FontAwesomeIcon icon={faLocationPin} />
                        </span>
                        <h2 className="text-gray-500 text-[18px] font-bold">Freelance, Remote</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[21px] text-[#8973EC]">
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <h2 className="text-gray-500 text-[18px] font-bold">+(234) 814 150 0971</h2>
                    </div>
                </div>
            </div>
            <div className="xl:w-[70%] w-[100%] pt-24 xl:pt-0  flex justify-center items-center">
                <form 
                    action="" 
                    className="w-[100%] md:w-[60%] mx-auto xl:mx-0  pt-6 h-[600px] border-2 gap-2 border-gray-800 rounded-[30px] flex flex-col items-center"
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
    </div>
  )
}

export default Contact;