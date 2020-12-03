import React from "react";
import "./mobile-header.scss";

import { FiMenu } from "react-icons/fi";

function MobileHeader({ toggleSidebar, setToggleSidebar }) {
  return (
    <div className="mobile-header">
      <FiMenu
        onClick={() => setToggleSidebar((prevState) => !prevState)}
        className={`mobile-header-icon ${toggleSidebar && "hide"}`}
        size="40"
        color="#00008b"
      />
      <div className="mobile-header-title">
        <h1>Carlo Anselmi</h1>
        <h2>Front End Developer</h2>
      </div>
    </div>
  );
}

export default MobileHeader;
