import React from "react";
import "./Menus.css";
import { RxHome } from "react-icons/rx";
import { FaCode } from "react-icons/fa";
import {
  FcAbout,
  FcBiotech,
  FcBriefcase,
  FcBusinessContact,
  FcReadingEbook,
  FcVoicePresentation,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="https://picsum.photos/200/300" alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <RxHome />
                Home
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcAbout />
                About
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcBriefcase /> Work Experience
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaCode />
                Projects
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcVoicePresentation />
                Testimonial
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <RxHome title="Home" />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcAbout title="About" />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcBriefcase title="Work Experience" />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcBiotech title="Tech Stack" />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcReadingEbook title="Education" />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FaCode title="Projects" />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcVoicePresentation title="Testimonial" />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcBusinessContact title="Contact" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
