import React from "react";
import ContentHeader from "../../component/content-header/ContentHeader";
import "./education.scss";
import { FaUniversity } from "react-icons/fa";

import coursera1 from "../../img/coursera1.png";
import coursera2 from "../../img/coursera2.png";
import udemy1 from "../../img/udemy1.jpg";
import udemy2 from "../../img/udemy2.jpg";
import pluralsight1 from "../../img/pluralsight1.png";
import pluralsight2 from "../../img/pluralsight2.png";

function Education() {
  return (
    <div className="education">
      <ContentHeader title="Education" />
      <div className="education-card">
        <div className="education-card-header">
          <div className="education-card-company">
            <FaUniversity size={50} color="red" />
            <p className="education-card-title">
              Udemy Academy | Coursera | Pluralsight
            </p>
          </div>
          <p className="education-card-position">Front End Development</p>
        </div>
        <p className="education-card-date">
          September 2017 - Present | Genova, Italy - London, UK
        </p>
        <div className="education-card-content">
          <h3 className="education-card-content-title">Courses :</h3>
          <ul className="education-card-content-list">
            <li>Web Developer Bootcamp - Udemy.</li>
            <li>
              Git a Web Developer Job : Mastering the Modern Workflow - Udemy.
            </li>
            <li>Advanced CSS and Sass - Udemy.</li>
            <li>Modern React with Redux - Udemy.</li>
            <li>Complete React Developer (Redux, Hooks) - Udemy.</li>
            <li>Building Applications with React and Redux - Pluralsight.</li>
            <li>HTML, CSS, and Javascript for Web Developers - Coursera.</li>
            <li>The Ultimate React Native Course - Code With Mosh.</li>
          </ul>
        </div>
      </div>
      <img src={coursera1} alt="" />
      <img src={coursera2} alt="" />
      <img src={udemy1} alt="" />
      <img src={udemy2} alt="" />
      <img src={pluralsight1} alt="" />
      <img src={pluralsight2} alt="" />
    </div>
  );
}

export default Education;
