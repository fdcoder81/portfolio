import React from "react";
import "./projectCard.scss";
import { MdLaptop } from "react-icons/md";
import { FaGithub, FaVideo } from "react-icons/fa";

function ProjectCard() {
  const img = "../../img/burnt1.png";
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <div className="project-card-content">
        <h2 className="project-card-title">Burnt Butter</h2>
        <p className="project-card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          suscipit accusantium laborum nesciunt, cumque neque eaque animi
          laboriosam qui, aspernatur quam, recusandae et saepe? Saepe provident
          at voluptatibus commodi maiores!
        </p>
        <p className="project-card-tools">React.js | JavaScript | Redux</p>
        <div className="project-card-icons">
          <div className="project-card-icon">
            <MdLaptop size="35" color="#00008b" />
            <p className="project-card-link">Live demo</p>
          </div>
          <div className="project-card-icon">
            <FaGithub size="35" color="red" />
            <p className="project-card-link">Source Code</p>
          </div>
          <div className="project-card-icon">
            <FaVideo size="35" color="red" />
            <p className="project-card-link">Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
