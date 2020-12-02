import React from "react";
import ContentHeader from "../../component/content-header/ContentHeader";
import "./about.scss";
import photo from "../../img/photo.jpg";

function About() {
  return (
    <div name="about" className="about">
      <div className="about-profile">
        <img src={photo} alt="" />
        <h3 className="about-title">
          Front end web developer, tech enthusiast and passionate about web
          development.
        </h3>
      </div>
      <p className="about-content">
        I love to learn and I love to see a new challenge and then overcome it.
        I am not intimidated learning new things or trying something for the
        first time. I am extremely proud that I went the self-taught route to
        becoming a web developer.
      </p>
    </div>
  );
}

export default About;
