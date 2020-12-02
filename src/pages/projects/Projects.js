import React from "react";
import ContentHeader from "../../component/content-header/ContentHeader";
import ProjectCard from "../../component/project-card/ProjectCard";
import { projects } from "../../data/data";

function Projects() {
  return (
    <div name="projects" className="projects">
      <ContentHeader title="Projects" />
      <div className="projects-container">
        {projects.map((item) => (
          <ProjectCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
