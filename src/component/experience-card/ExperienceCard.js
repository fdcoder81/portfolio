import React from "react";
import "./experienceCard.scss";

import desk from "../../img/desk.png";

function ExperienceCard() {
  return (
    <div className="experience-card">
      <div className="card-header">
        <div className="company">
          <img src={desk} alt="" />
          <p className="company-title">Freelancer</p>
        </div>
        <p className="card-header-position">Front End developer</p>
      </div>
      <p className="date">Jun 2020 - Present | London, UK</p>
    </div>
  );
}

export default ExperienceCard;
