import React from "react";
import "./projectCard.scss";
import { MdLaptop } from "react-icons/md";
import { FaGithub, FaVideo } from "react-icons/fa";
import ResponsivePlayer from "../react-player/ReactPlayer";
import { Link } from "react-router-dom";

function ProjectCard({ item }) {
  return (
    <div className="project-card">
      <div className="project-card-info">
        <div
          className="project-card-image"
          /* style={{ backgroundImage: `url(${item.img})` }} */
        >
          <img src={item.img} alt="" />
        </div>
        <div className="project-card-content">
          <h2 className="project-card-title">{item.title}</h2>
          <p className="project-card-description">{item.description}</p>
          {item.extraInfo && (
            <p className="project-card-extra">{item.extraInfo}</p>
          )}
          <p className="project-card-tools">{item.tools}</p>
          <div className="project-card-icons">
            <Link target="_blank" to={item.liveUrl}>
              <div
                className={`project-card-icon ${!item.liveUrl && "disable"}`}
              >
                <MdLaptop size="32" color="#00008b" />
                <p className="project-card-link">Live demo</p>
              </div>
            </Link>
            <Link target="_blank" to={item.sourceUrl}>
              <div
                className={`project-card-icon ${!item.sourceUrl && "disable"}`}
              >
                <FaGithub size="32" color="red" />
                <p className="project-card-link">Source Code</p>
              </div>
            </Link>
            {/*  <div className={`project-card-icon ${!item.videoUrl && "disable"}`}>
              <FaVideo size="32" color="red" />
              <p className="project-card-link">Video</p>
            </div> */}
          </div>
        </div>
      </div>
      {item.videoUrl && (
        <div className="project-card-video">
          <ResponsivePlayer videoUrl={item.videoUrl} />
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
