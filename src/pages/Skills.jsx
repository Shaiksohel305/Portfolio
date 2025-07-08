import React from 'react'
import './skills.css'
import { FaTools } from 'react-icons/fa'
export const Skills = () => {
  return (
    <div>
      <div className="techskills">
        <h1>Tech-Skills</h1>
        <ul className='mainskills'>
          <li className='fontend'>Fronted: HTML5, CSS3, Bootstarp5</li>
          <li className='backend'>Backend: Python, Node.js, Express.js </li>
          <li className='database'>Database: MongoDB, Sql-Oracle</li>
          <li className="tools"> Tools/frameworks : React , JQuery, Vs-Code, Github </li>
        </ul>
      </div>
    </div>
  )
}
