import React from "react";
import About from "../about/About";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";

function Content() {
  return (
    <div className="content-container">
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default Content;
