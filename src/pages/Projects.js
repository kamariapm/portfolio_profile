import React from "react";
import ProjectItem from "../components/ProjectItem";
//import kamaria from "../assets/kamaria.png";
//import Screenshot from "../assets/Screenshot.png";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";
function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
