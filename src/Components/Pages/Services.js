import React from 'react'
import './Services.css';
import { HiOutlineAcademicCap } from 'react-icons/hi'







const Services = () => {
  return (
    <section id="education" className='education'>
      <h5>Education and Qualifications</h5>
      <h2>Education</h2>
      <div className="container services-container">
        <article className="services">
          <div className="services-header">
            <div className="services-detail">
              <HiOutlineAcademicCap className='details-icon' />
            </div>
            <h3>B.E in Computer Science and Engineering</h3>
            <span className='education-card text'>Navodaya Institute of Technology  <small className="education-detail year">2018-Present</small></span>
            <div className='education-details'>
              <small className='cgpa-number'><span className='cgpa-name'>CGPA</span>                         7.24</small>
            </div>
          </div>
        </article>
        <article className="services">
          <div className="services-header">
            <div className="services-detail">
              <HiOutlineAcademicCap className='details-icon' />
            </div>
            <h3>SCIENCE</h3>
            <span className='education-card text-m'>Diamond IND PU Science College  <small className="education-detail year">2015-2017</small></span>
            <div className='education-details'>
              <small className='cgpa-number'><span className='cgpa-name'>PERCENTAGE           </span>81.00</small>
            </div>

          </div>
        </article>
      </div>
    </section>
  )
}

export default Services;