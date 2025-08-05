import React from 'react';
import { faFacebook, faInstagram, faLinkedin, faMedium, faTiktok, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faContactBook, faEnvelope, faLocationPin, faMapLocation, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className='py-24'>
        <div className='w-full flex justify-center items-center'>
            <span></span>
            <h2 className='text-[25px] font-bold text-white'>Demain Tech Inc</h2>
        </div>
        <div className="flex gap-4 items-center justify-center text-center text-[#8973EC] text-[25px] pt-4">
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faMedium} />
            <FontAwesomeIcon icon={faTiktok} />
        </div>
        <p className='text-gray-500 text-center mx-auto mt-4 font-semibold'>&copy; 2025</p>
    </div>
  )
}

export default Footer;