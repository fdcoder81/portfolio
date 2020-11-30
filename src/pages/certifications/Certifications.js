import React from "react";
import ContentHeader from "../../component/content-header/ContentHeader";
import "./certifications.scss";

import coursera1 from "../../img/coursera1.png";
import coursera2 from "../../img/coursera2.png";
import udemy1 from "../../img/udemy1.jpg";
import udemy2 from "../../img/udemy2.jpg";
import pluralsight1 from "../../img/pluralsight1.png";
import pluralsight2 from "../../img/pluralsight2.png";

function Certifications() {
  return (
    <div className="certifications">
      <ContentHeader title="Certifications" />
      <img src={coursera1} alt="" />
      <img src={coursera2} alt="" />
      <img src={udemy1} alt="" />
      <img src={udemy2} alt="" />
      <img src={pluralsight1} alt="" />
      <img src={pluralsight2} alt="" />
    </div>
  );
}

export default Certifications;
