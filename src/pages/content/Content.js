import React from "react";
import About from "../about/About";
import Certifications from "../certifications/Certifications";
import Contact from "../contacts/Contact";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

function Content({ handleClickOutside }) {
  return (
    <div onClick={handleClickOutside} className="content-container">
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default Content;
