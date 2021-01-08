import React from "react";
import ContentHeader from "../../component/content-header/ContentHeader";
import "./education.scss";
import { SiPluralsight, SiUdemy, SiCoursera } from "react-icons/si";

function Education() {
  return (
    <div name="education" className="education">
      <ContentHeader title="Education" />
      <div className="education-card">
        <div className="education-card-header">
          <div className="education-card-company">
            <SiUdemy size={50} color="red" />
            <p className="education-card-title">Udemy | udemy.com</p>
          </div>
          <p className="education-card-position">Front End Development</p>
        </div>
        <p className="education-card-date">
          September 2017 - Present | Genova, Italy - London, UK
        </p>
        <div className="education-card-content">
          <h3 className="education-card-content-title">Courses :</h3>
          <ul className="education-card-content-list">
            <li>Web Developer Bootcamp</li>
            <li>Git a Web Developer Job : Mastering the Modern Workflow</li>
            <li>Advanced CSS and Sass</li>
            <li>Modern React with Redux</li>
            <li>Complete React Developer (Redux, Hooks)</li>
            <li>The Ultimate React Native Course - Code With Mosh.</li>
          </ul>
        </div>
      </div>
      <div className="education-card">
        <div className="education-card-header">
          <div className="education-card-company">
            <SiPluralsight size={50} color="red" />
            <p className="education-card-title">
              Pluralsight | pluralsight.com
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
            <li>Building Applications with React and Redux</li>
            <li>HTML Fundamentals</li>
            <li>HTML,CSS and JavaScript: The Big Picture</li>
          </ul>
        </div>
      </div>
      <div className="education-card">
        <div className="education-card-header">
          <div className="education-card-company">
            <SiCoursera size={50} color="red" />
            <p className="education-card-title">Coursera | coursera.com</p>
          </div>
          <p className="education-card-position">Front End Development</p>
        </div>
        <p className="education-card-date">
          September 2017 - October 2018 | Genova, Italy - London, UK
        </p>
        <div className="education-card-content">
          <h3 className="education-card-content-title">Courses :</h3>
          <ul className="education-card-content-list">
            <li>Introduction to HTML5</li>
            <li>HTML, CSS, and Javascript for Web Developers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
