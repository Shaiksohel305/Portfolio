import React from 'react'
import './project.css'
import ProjectCard from './ProjectCard';
import { FaFolderOpen } from 'react-icons/fa6';
export const Project = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        <ProjectCard
          title="E-commerce Website"
          description="A responsive online store built with React, Node.js, Express, and MongoDB. Includes cart, user login, and product filtering."
          image="eproject.png"
          demoLink="https://setwwwemart.netlify.app/"
          codeLink="https://github.com/Shaiksohel305/E-Commerce"
        />
        <ProjectCard
          title="CountDown-Timer"
          description="A countdown timer built using javascript that dynamically updates the time remaining untile reaches zero."
          image="img count down.png"
          demoLink="https://01-contdown-timer.netlify.app/"
          codeLink="https://github.com/Shaiksohel305/CountDown-Timer"
        />
        <ProjectCard
          title="Portfolio Website"
          description="This portfolio site is made using React and CSS. It’s clean, responsive, and fully functional."
          image="profile.png"
          demoLink="http://localhost:5173/"
          codeLink="https://github.com/yourusername/portfolio-fullstack"
        />
      </div>
    </div>
  );
};
