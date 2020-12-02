import React from "react";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContentHeader from "../../component/content-header/ContentHeader";

import "./contact.scss";

function Contact() {
  return (
    <div name="contact" className="contact">
      <ContentHeader title="Contact" />
      <div className="contact-container">
        <div className="contact-item">
          <HiMail size="50" color="#666" />
          <p>carloanselmi81@gmail.com</p>
        </div>
        <div className="contact-item">
          <FaGithub size="50" color="red" />
          <p>github.com/fdcoder81</p>
        </div>
        <div className="contact-item">
          <FaLinkedin size="50" color="#00008b" />
          <p>www.linkedin.com/in/carlo-anselmi</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
