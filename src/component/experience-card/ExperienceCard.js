import React from "react";
import "./experienceCard.scss";

function ExperienceCard({ item }) {
  return (
    <div className="experience-card">
      <div className="experience-card-header">
        <div className="experience-card-company">
          <img src={item.img} alt="" />
          <p className="experience-card-title">{item.title}</p>
        </div>
        <p className="experience-card-position">{item.position}</p>
      </div>
      <p className="experience-card-date">
        {item.date} | {item.location}
      </p>
      <div className="experience-card-content">
        <h3 className="experience-card-content-title">Accomplishments</h3>
        <ul className="experience-card-content-list">
          {item.list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
