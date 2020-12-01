import React from "react";
import About from "../about/About";
import Certifications from "../certifications/Certifications";
import Contacts from "../contacts/Contacts";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

function Content() {
  return (
    <div className="content-container">
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contacts />
    </div>
  );
}

export default Content;
