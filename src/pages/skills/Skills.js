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
          <div className="skills-box">
            <FaHtml5 className="skills-box-icon" color="red" />
            <p>HTML5</p>
          </div>
          <div className="skills-box">
            <FaCss3 className="skills-box-icon" color="#5E77F9" />
            <p>CSS3</p>
          </div>
          <div className="skills-box">
            <FaSass className="skills-box-icon" color="#B8860B" />
            <p>SASS</p>
          </div>
          <div className="skills-box">
            <SiJavascript className="skills-box-icon" color="#FFA500" />
            <p>JavaScript</p>
          </div>
          <div className="skills-box">
            <FaReact className="skills-box-icon" color="#7B68EE" />
            <p>React.js</p>
          </div>
          <div className="skills-box">
            <FaReact className="skills-box-icon" color="#0000CD" />
            <p>React Native</p>
          </div>
          <div className="skills-box">
            <SiRedux className="skills-box-icon" color="#9370DB" />
            <p>Redux</p>
          </div>
          <div className="skills-box">
            <SiGit className="skills-box-icon" color="#FF4500" />
            <p>Git</p>
          </div>
          <div className="skills-box">
            <FaGithub className="skills-box-icon" color="#FF0000" />
            <p>GitHub</p>
          </div>
          <div className="skills-box">
            <SiVisualstudiocode className="skills-box-icon" color="#FF0000" />
            <p>Visual Studio Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
