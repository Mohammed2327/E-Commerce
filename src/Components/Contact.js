import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../Stylesheets/Contact.css';

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1> Contact Me </h1>
        <div className="contact-icon"
        >
          <a
            href="https://www.facebook.com/mujju.mohammedmujeeb"
            className="items"
          >
            <FaFacebook className="icons" />
          </a>
          <a
            href="https://x.com/Mujeebuddin_786?t=asZAHrqymkZIqrNb32J42w&s=09"
            className="items"
          >
            <FaXTwitter className="icons" />
          </a>
          <a
            href="https://www.instagram.com/bad_boy_mujju?igsh=dGU3NjJsaDloMHp3"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-mujeebuddin-6475b621b/"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a href="https://github.com/Mohammed2327" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="mailto:mohammedmujju327@gmail.com" className="items">
            <MdEmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
