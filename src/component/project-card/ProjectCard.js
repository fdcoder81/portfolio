import React from "react";
import "./projectCard.scss";
import { MdLaptop } from "react-icons/md";
import { FaGithub, FaVideo } from "react-icons/fa";

function ProjectCard({ item }) {
  return (
    <div className="project-card">
      <div
        className="project-card-image"
        style={{ backgroundImage: `url(${item.img})` }}
      ></div>
      <div className="project-card-content">
        <h2 className="project-card-title">{item.title}</h2>
        <p className="project-card-description">{item.description}</p>
        <p className="project-card-tools">{item.tools}</p>
        <div className="project-card-icons">
          <div className="project-card-icon">
            <MdLaptop size="32" color="#00008b" />
            <p className="project-card-link">Live demo</p>
          </div>
          <div className="project-card-icon">
            <FaGithub size="32" color="red" />
            <p className="project-card-link">Source Code</p>
          </div>
          <div className="project-card-icon">
            <FaVideo size="32" color="red" />
            <p className="project-card-link">Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
