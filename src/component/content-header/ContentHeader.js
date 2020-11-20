import React from "react";
import "./contentHeader.scss";

function ContentHeader({ title }) {
  return (
    <div className="header">
      <h2>{title}</h2>
    </div>
  );
}

export default ContentHeader;
