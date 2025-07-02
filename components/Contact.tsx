import { faFacebook, faInstagram, faLinkedin, faMedium, faTiktok, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faContactBook, faEnvelope, faLocationPin, faMapLocation, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectGroup,SelectItem, SelectLabel } from "./ui/select";
// import { Select, SelectValue, SelectTrigger, SelectContent, SelectGroup,SelectItem, SelectLabel } from "@radix-ui/react-select";
// import {  } from "@radix-ui/react-select";


const Contact = () => {
  return (
    <div className="text-white">
        <div className='w-full p-4'>
            <h2 className='text-[45px] font-bold text-white text-center xl:text-left'>Contact me</h2>
            <p className='text-gray-500 text-[16px] xl:w-[90%] font-bold text-center xl:text-left mx-auto xl:mx-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque, odio veniam iste corporis enim. Distinctio. </p>
        </div>

        <div className="w-full flex flex-col xl:flex-row justify-between items-center py-16">
            <div className="xl:w-[50%] w-[100%]">
                <h2 className="text-gray-500 font-bold text-[40px] text-center xl:text-left">Any type of Query & <br /> Discussion</h2>
                <div className="flex gap-4 items-center justify-center xl:justify-start xl:items-start text-center xl:text-left text-gray-500 text-[28px] pt-8">
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
                        <span className="text-[21px] text-gray-500">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <h2 className="text-gray-500 text-[18px] font-bold">kelechikingsley2576@gmail.com</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[21px] text-gray-500">
                            <FontAwesomeIcon icon={faLocationPin} />
                        </span>
                        <h2 className="text-gray-500 text-[18px] font-bold">Freelance, Remote</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[21px] text-gray-500">
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <h2 className="text-gray-500 text-[18px] font-bold">+(234) 814 150 0971</h2>
                    </div>
                </div>
            </div>
            <div className="xl:w-[50%] w-full pt-12 xl:pt-0">
                <form 
                    action="" 
                    className="w-[80%] md:w-[60%] mx-auto xl:mx-0  pt-4 h-[600px] border-2 gap-4 border-gray-800 rounded-[50px] flex flex-col items-center"
                >
                    <h2 
                        className="text-[25px] text-center text-white"
                    >Send me a message</h2>
                    <input 
                        required
                        type="text" 
                        placeholder="Full name"
                        className="bg-gray-800 outline-none mt-2 text-gray-500 text-[17px] font-bold focus:border-[#00ff99] focus:border-2  pl-4 rounded-lg w-[90%] h-[45px] border-none"
                    />

                    <div className="grid grid-cols-2 mx-auto w-[100%]">
                        <input 
                            required
                            type="email" 
                            placeholder="Email"
                            className="bg-gray-800 outline-none mt-2 text-gray-500 text-[17px] font-bold focus:border-[#00ff99] focus:border-2  pl-4 rounded-lg w-[80%] mx-auto h-[45px] border-none"
                        />

                        <input 
                            required
                            type="tel" 
                            placeholder="Phone number"
                            className="bg-gray-800 outline-none mt-2 text-gray-500 text-[17px] font-bold focus:border-[#00ff99] focus:border-2  pl-4 rounded-lg w-[80%] mx-auto h-[45px] border-none"
                        />
                    </div>

                    <Select>
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
                                <SelectItem value="web">Web development</SelectItem>
                                <SelectItem value="mobile">Mobile development</SelectItem>
                                <SelectItem value="uiux">UI/UX</SelectItem>
                                <SelectItem value="googlebus">Google Business</SelectItem>
                                <SelectItem value="seo">SEO</SelectItem>
                                <SelectItem value="branding">Branding</SelectItem>
                                <SelectItem value="blockchain">Blockchain</SelectItem>
                                <SelectItem value="techedu">Tech Education</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <textarea 
                        name="" 
                        id="" 
                        className="bg-gray-800 outline-none mt-2 text-gray-500 text-[17px] font-bold focus:border-[#00ff99] focus:border-2  pl-4 rounded-lg w-[90%] h-[160px] p-4 border-none"
                        placeholder="Your message"
                    ></textarea>

                    <button className="w-[90%] h-[50px] bg-[#00ff99] border-none outline-none hover:opacity-75 rounded-lg mt-4 text-[17px] font-bold text-gray-900">Send message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;