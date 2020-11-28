import React from "react";
import ContentHeader from "../../component/content-header/ContentHeader";
import ProjectCard from "../../component/project-card/ProjectCard";

function Projects() {
  return (
    <div className="projects">
      <ContentHeader title="Projects" />
      <div className="projects-container">
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
