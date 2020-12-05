import React, { useEffect } from "react";
import { Link } from "react-scroll";

import {
  FaUser,
  FaDesktop,
  FaBuilding,
  FaCode,
  FaUniversity,
  FaAward,
  FaEnvelope,
} from "react-icons/fa";

import "./sidebar.scss";

function Sidebar({ toggleSidebar }) {
  return (
    <div className={`sidebar ${toggleSidebar ? "show" : null}`}>
      <Link smooth to="about">
        <div className="sidebar-title">
          <h1>Carlo Anselmi</h1>
          <h2>Front end Developer</h2>
        </div>
      </Link>

      <div className="sidebar-menu">
        {/*  <NavLink
          className="sidebar-item"
          smooth
          to="#about"
          activeClassName="active"
        >
          <FaUser size="20" color="#00008b" />
          <p>About</p>
        </NavLink> */}
        <Link
          activeClass="active"
          className="sidebar-item"
          smooth
          spy
          hashSpy
          to="experience"
        >
          <FaBuilding size="20" color="#00008b" />
          <p>Experience</p>
        </Link>

        <Link
          className="sidebar-item"
          smooth
          spy
          hashSpy
          to="projects"
          activeClassName="active"
        >
          <FaDesktop size="20" color="#800080" />
          <p>Projects</p>
        </Link>
        <Link
          className="sidebar-item"
          smooth
          spy
          hashSpy
          to="skills"
          activeClassName="active"
        >
          <FaCode size="20" color="#0000ff" />
          <p>Skills</p>
        </Link>
        <Link
          className="sidebar-item"
          smooth
          spy
          hashSpy
          to="education"
          activeClassName="active"
        >
          <FaUniversity size="20" color="#800000" />
          <p>Education</p>
        </Link>
        <Link
          className="sidebar-item"
          smooth
          spy
          hashSpy
          to="certifications"
          activeClassName="active"
        >
          <FaAward size="20" color="#ffa500" />
          <p>Certifications</p>
        </Link>
        <Link
          className="sidebar-item"
          smooth
          spy
          hashSpy
          to="contact"
          activeClassName="active"
        >
          <FaEnvelope size="20" color="#008000" />
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
