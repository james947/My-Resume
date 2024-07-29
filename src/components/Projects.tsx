import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <div className="project-info">
          <h3>Alfinder</h3>
          <p>Alfinder is a Go package that helps users find and validate addresses. It supports multiple formats and integrates easily with other Go applications.</p>
          <a href="https://github.com/james947/alfinder" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
