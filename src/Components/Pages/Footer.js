import React from 'react'
import './Footer.css';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import {ImTwitter} from "react-icons/im";


const Footer = () => {
  return (
    <Footer>
      <a href="#" className="footer-logo">PORTFOLIO</a>
      <ul className="permalinks">
        <li><a href="#" className="">Home</a></li>
        <li><a href="#about" className="">About</a></li>
        <li><a href="#experience" className="">Experience</a></li>
        <li><a href="#education" className="">Education</a></li>
        <li><a href="#portfolio" className="">Portfolio</a></li>
        <li><a href="#contact" className="">Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/mahadhav-dhobale/" target="_blank" className=""><BsLinkedin/></a>
        <a href="https://github.com/Mahadhav1999" target="_blank" className=""><BsGithub/></a>
        <a href="https://twitter.com/Dhobale_M21" target="_blank" className=""><ImTwitter/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; 2022 Portfolio | Mahadhav</small>

      </div>
    </Footer>
  )
}

export default Footer