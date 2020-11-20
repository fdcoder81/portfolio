import React from "react";
import ContentHeader from "../../component/content-header/ContentHeader";
import ExperienceCard from "../../component/experience-card/ExperienceCard";
import "./experience.scss";

function Experience() {
  return (
    <div className="experience">
      <ContentHeader title="Experience" />
      <div className="experience-container">
        <ExperienceCard />
      </div>
    </div>
  );
}

export default Experience;
