import React from 'react';
import './projectcard.css';

const ProjectCard = ({ title, description, image, demoLink, codeLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;