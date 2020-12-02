import React from "react";
import ContentHeader from "../../component/content-header/ContentHeader";
import ExperienceCard from "../../component/experience-card/ExperienceCard";
import "./experience.scss";
import { experience } from "../../data/data";

function Experience() {
  return (
    <div name="experience" className="experience">
      <ContentHeader title="Experience" />
      <div className="experience-container">
        {experience.map((item) => (
          <ExperienceCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
