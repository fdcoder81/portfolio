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
          <a
            className="contact-atag"
            href="mailto:carloanselmi81@gmail.com"
            target="_blank"
          >
            <HiMail size="50" color="#666" />
          </a>
          <a
            className="contact-atag"
            href="mailto:carloanselmi81@gmail.com"
            target="_blank"
          >
            <p>carloanselmi81@gmail.com</p>
          </a>
        </div>

        <div className="contact-item">
          <a
            className="contact-atag"
            href="http://github.com/fdcoder81"
            target="_blank"
          >
            <FaGithub size="50" color="red" />
          </a>
          <a
            className="contact-atag"
            href="http://github.com/fdcoder81"
            target="_blank"
          >
            <p>github.com/fdcoder81</p>
          </a>
        </div>

        <div className="contact-item">
          <a
            className="contact-atag"
            href="http://linkedin.com/in/carlo-anselmi"
            target="_blank"
          >
            <FaLinkedin size="50" color="#00008b" />
          </a>
          <a
            className="contact-atag"
            href="http://linkedin.com/in/carlo-anselmi"
            target="_blank"
          >
            <p>www.linkedin.com/in/carlo-anselmi</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
