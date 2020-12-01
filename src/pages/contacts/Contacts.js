import React from "react";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContentHeader from "../../component/content-header/ContentHeader";

import "./contacts.scss";

function Contacts() {
  return (
    <div className="contacts">
      <ContentHeader title="Contacts" />
      <div className="contacts-container">
        <div className="contacts-item">
          <HiMail size="50" color="#666" />
          <p>carloanselmi81@gmail.com</p>
        </div>
        <div className="contacts-item">
          <FaGithub size="50" color="red" />
          <p>github.com/fdcoder81</p>
        </div>
        <div className="contacts-item">
          <FaLinkedin size="50" color="#00008b" />
          <p>www.linkedin.com/in/carlo-anselmi</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
