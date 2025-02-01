import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <>
      <div className="container" id="contact">
        <h1>CONTACT</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <a
            href="https://www.linkedin.com/in/atharv-gaikwad-506a8a235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://github.com/atharvag18 "
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:gaikwadatharv18@gmail.com "
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
