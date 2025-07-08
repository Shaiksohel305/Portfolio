import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { FaHome, FaPhoneAlt, FaTools } from 'react-icons/fa'
import { FaDiagramProject, FaFolderOpen, FaRProject, FaUser } from 'react-icons/fa6'
export const Header = () => {
  return (
    <div className="header">
            <div id="logo"><strong>Sohel-Portfolio</strong></div>
            <nav >
                <ul className="nav-links">
                    <li><Link to="/"><FaHome/> Home</Link></li>
                    <li><Link to="/about"><FaUser/> About</Link></li>
                    <li><Link to="/projects"><FaFolderOpen/> Projects</Link></li>
                    <li><Link to="/skills"><FaTools/> Skills</Link></li>
                    <li><Link to="/contact"><FaPhoneAlt/> Contact</Link></li>
                </ul>
            </nav>
    </div>
  )
}
