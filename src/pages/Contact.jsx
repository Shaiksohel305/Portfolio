import React from 'react'
import './contact.css'
import { FaEnvelope, FaFile, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
export const Contact = () => {
  return (
    <div className='contact' >
      <h1>Contact Me</h1>
      <p className='datapara'>if have any opportunities or questions plsease contact me. </p>
      <div className="contact-link">
        <p><strong><FaEnvelope/> Email : </strong> <a href="mailto:sohelshaik.it@gmail.com">shaiksohel@gmail.com</a></p>
        <p><strong><FaGithub/> GitHub : </strong> <a href="https://github.com/Shaiksohel305" target='blank'>github.com</a></p>
        <p><strong><FaLinkedin/> LinkedIn : </strong> <a href="https://www.linkedin.com/in/shaik-sohel1/" target='blank'>LinkedIn</a></p>
        <p><strong><FaFile/> Resume : </strong> <a href="/Sohel Frontend.pdf">Download PDF</a></p>
      </div>
    </div>
  )
}