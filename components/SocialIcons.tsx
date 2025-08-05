import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {icon: <FontAwesomeIcon icon={faGithub} />, path: ""},
  {icon: <FontAwesomeIcon icon={faFacebook} />, path: ""},
  // {icon: <FontAwesomeIcon icon={faYoutube} />, path: ""},
  {icon: <FontAwesomeIcon icon={faXTwitter} />, path: ""},
  {icon: <FontAwesomeIcon icon={faLinkedin} />, path: ""},
];

const socialsection = socials.map((social, index )=> 
  <Link href="#" key={index} className="w-[30px] h-[30px]  border-white rounded-full flex justify-center items-center text-gray-500 text-2xl hover:text-gray-300 hover:transition-all duration-500">
    {/* <span className="text-[30px] text-white"> */}
      {social.icon}
    
  </Link>
)

const SocialIcons = () => {
  return (
    <div className="flex gap-2" >
      {socialsection}
    </div>
  )
}

export default SocialIcons;