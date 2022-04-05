import React from 'react'
import{useState} from 'react';
import './Nav.css';
import {AiOutlineHome} from "react-icons/ai"
import{FaRegUser} from "react-icons/fa"
import{BiBook} from "react-icons/bi"
import{RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import{MdFavoriteBorder} from "react-icons/md";


const Nav = () => {
  const[ActiveNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() =>setActiveNav('#')}   className={ActiveNav === '#' ? 'active' : ''}> <AiOutlineHome/></a>
      <a href="#about" onClick={() =>setActiveNav('#about')} className={ActiveNav === '#about' ? 'active' : ''}><FaRegUser/></a>
      <a href="#experience" onClick={() =>setActiveNav('#experience')}   className={ActiveNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#education" onClick={() =>setActiveNav('#education')}   className={ActiveNav === '#education' ? 'active' : ''}><MdFavoriteBorder/></a>
      <a href="#portfolio" onClick={() =>setActiveNav('#portfolio')}   className={ActiveNav === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() =>setActiveNav('#contact')}   className={ActiveNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>


    </nav>
  )
}
export default Nav