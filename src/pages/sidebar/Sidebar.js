import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
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

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h1>Carlo Anselmi</h1>
        <h2>Front end Developer</h2>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-item">
          <FaUser size="20" color="#00008b" />
          <p>About</p>
        </div>
        <NavLink
          className="sidebar-item"
          smooth
          to="#experience"
          activeClassName="active"
        >
          <FaBuilding size="20" color="#00008b" />
          <p>Experience</p>
        </NavLink>

        <div className="sidebar-item">
          <FaDesktop size="20" color="#00008b" />
          <p>Projects</p>
        </div>
        <div className="sidebar-item">
          <FaCode size="20" color="#00008b" />
          <p>Skills</p>
        </div>
        <div className="sidebar-item">
          <FaUniversity size="20" color="#00008b" />
          <p>Education</p>
        </div>
        <div className="sidebar-item">
          <FaAward size="20" color="#00008b" />
          <p>Certifications</p>
        </div>
        <div className="sidebar-item">
          <FaEnvelope size="20" color="#00008b" />
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
