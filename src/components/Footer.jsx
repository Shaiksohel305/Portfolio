import React from 'react'
import './footer.css'
import { FaEnvelope, FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
export const Footer = () => {
  return (
    <footer className='footer'>
        <p>© {new Date().getFullYear()} Shaik Sohel. All rights reserved.</p>
        <div className="social">
            <a href="https://github.com/Shaiksohel305"><FaGithub/> GitHub</a>
            <a href="https://www.linkedin.com/in/shaik-sohel1/" ><FaLinkedin/> LinkedIn</a>
            <a href="mailto:sohelshaik.it@gmail.com"><FaEnvelope/> Email</a>
        </div>
    </footer>
  )
}
