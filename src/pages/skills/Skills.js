import React from "react";
import ContentHeader from "../../component/content-header/ContentHeader";
import "./skills.scss";
import { FaHtml5, FaCss3, FaSass, FaReact, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiGit,
  SiVisualstudiocode,
} from "react-icons/si";

function Skills() {
  return (
    <div name="skills">
      <ContentHeader title="Skills" />
      <div className="skills">
        <div className="skills-icons">
          <div className="skills-icon">
            <FaHtml5 size={130} color="red" />
            <p>HTML5</p>
          </div>
          <div className="skills-icon">
            <FaCss3 size={130} color="#5E77F9" />
            <p>CSS3</p>
          </div>
          <div className="skills-icon">
            <FaSass size={130} color="#B8860B" />
            <p>SASS</p>
          </div>
          <div className="skills-icon">
            <SiJavascript size={130} color="#FFA500" />
            <p>JavaScript</p>
          </div>
          <div className="skills-icon">
            <FaReact size={130} color="#7B68EE" />
            <p>React.js</p>
          </div>
          <div className="skills-icon">
            <FaReact size={130} color="#0000CD" />
            <p>React Native</p>
          </div>
          <div className="skills-icon">
            <SiRedux size={130} color="#9370DB" />
            <p>Redux</p>
          </div>
          <div className="skills-icon">
            <SiGit size={130} color="#FF4500" />
            <p>Git</p>
          </div>
          <div className="skills-icon">
            <FaGithub size={130} color="#FF0000" />
            <p>GitHub</p>
          </div>
          <div className="skills-icon">
            <SiVisualstudiocode size={130} color="#FF0000" />
            <p>Visual Studio Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
