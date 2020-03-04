import React from 'react';

const Projects = props => {
    return (
      <div className="project-list">
        {props.projects.map(project => (
          <div className="project" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.body}</p>
          </div>
        ))}
      </div>
    );
  };

export default Projects;