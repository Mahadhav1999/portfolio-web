import React, { useRef } from 'react'
import './Contact.css';
import { MdOutlineMail } from 'react-icons/md'
import { GrLinkedin } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kz1b2kp', 'template_wffoz12', form.current, 'od7PJNhFJ1WZc_joW')

    e.target.reset();
  };

  let promise = () => {
    const resolveAfter3second = new Promise((resolve) => {
      setTimeout(resolve, 3000);
    })
    toast.promise(resolveAfter3second, {
      success: "Message Has been sent successfully 👌",
      pending: "Sending the message....",
      error: "Message has not been sent",
    });
  };


  return (
    <section id="contact" className='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className='contact-options'>
          <article className='contact-option'>
            <MdOutlineMail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>mahadhavdhobale@gmail.com</h5>
            <a href="mailto:mahadhavdhobale@gmail.com" target="_blank">Send Email</a>
          </article>
          <article className='contact-option'>
            <GrLinkedin className='contact-option-icon' />
            <h4>LinkedIn</h4>
            <h5>Mahadhav</h5>
            <a href="https://www.linkedin.com/in/mahadhav-dhobale/" target="_blank">Send Message</a>
          </article>
          <article className='contact-option'>
            <ImWhatsapp className='contact-option-icon' />
            <h4>WhatsApp</h4>
            <h5>+1234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=+918296499542" target="_blank">Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter your name here" required />
          <input type="email" name="email" placeholder="Enter your email address" required />
          <textarea type="text" name="message" placeholder="Your message here" rows="9" required />
          <a type="submit" class="btn btn-primary" onClick={promise}>Send Message</a>
          <ToastContainer />
        </form>
      </div>
    </section>
  )
}

export default Contact;