import React from "react";
import ContentHeader from "../../component/content-header/ContentHeader";
import "./skills.scss";
import { FaHtml5, FaCss3 } from "react-icons/fa";

function Skills() {
  return (
    <div>
      <ContentHeader title="Skills" />
      <div className="skills">
        <div className="skills-icons">
          <div className="skills-icon">
            <FaHtml5 size={150} color="red" />
            <p>HTML5</p>
          </div>
          <div className="skills-icon">
            <FaCss3 size={150} color="blue" />
            <p>CSS3</p>
          </div>
          <div className="skills-icon">
            <FaHtml5 size={150} color="red" />
            <p>HTML5</p>
          </div>
          <div className="skills-icon">
            <FaHtml5 size={150} color="red" />
            <p>HTML5</p>
          </div>
          <div className="skills-icon">
            <FaHtml5 size={150} color="red" />
            <p>HTML5</p>
          </div>
          <div className="skills-icon">
            <FaHtml5 size={150} color="red" />
            <p>HTML5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
