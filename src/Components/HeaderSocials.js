import React from 'react'
import { SiLinkedin} from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a className="" href="https://www.linkedin.com/in/mahadhav-dhobale/" target="_blank"><SiLinkedin/></a>
        <a className="" href="https://github.com/Mahadhav1999" target="_blank"><BsGithub/></a>

    </div>
  )
}

export default HeaderSocials;