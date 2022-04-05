import React from 'react'
import './About.css';
import ME from '../../assets/PhotoRoom-20220403_143216.png'
// import ME from '../../assets/me-about.jpg'
// import ME from '../../assets/1648963647285-01.jpeg'
import { FaAward } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';
import { BiCertification } from 'react-icons/bi';




const About = () => {
  return (
    <section id="about" className='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-image'>
            <img src={ME} alt="ME" />
          </div>
        </div>
        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about-card'>
              <MdWorkOutline className="about-icon" />
              <h5>Projects</h5>
              <small>3+ completed</small>
            </article>

            <article className='about-card'>
              <BiCertification className="about-icon" />
              <h5>Internship</h5>
              <small>Full Stack Web Developer</small>
            </article>
          </div>
          <p className="para">
            As I am undergoing the graduation, i am seeking a role which allows me to continue learning and perfecting my skills as a     <strong className="text-primary">Full STACK Web Developer</strong>  also to work in an environment which encourages me to succeed and grow professionally where I can utilize the skills and knowledge appropriately.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;