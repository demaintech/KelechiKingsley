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

const socialsection = socials.map(social => 
  <Link href="#" className="w-[30px] h-[30px] scale-75 border-white rounded-full flex justify-center items-center text-[#00ff99] text-xl hover:text-gray-300 hover:transition-all duration-500">
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