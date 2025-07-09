import React from 'react'
import './home.css'
import { About } from './About'
import { Project } from './Project'
import { Contact } from './Contact'
import { Skills } from './Skills'
export const Home = () => {
  return (
    <div className='home'>
      <div className="intro">
        <img src="sohelimg.jpg"  className="sohelimg"alt="sohel-img"/>
        <h1>Hi, I'm <span>Shaik Sohel</span></h1>
        <h2>Full Stack Web-Developer</h2>
        <p>  I design and develop responsive, user-centric web applications using modern technologies like React, Node.js, Express.js, and MongoDB. I’m dedicated to building scalable solutions 
    and writing clean, efficient code that brings ideas to life.</p>
        <a href="/projects" className='btn'>View of Projects</a>
    </div>
    <About/>
    <Project/>
    <Skills/>
    <Contact/>
    </div>
  )
}
