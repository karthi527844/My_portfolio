import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { RxHome } from "react-icons/rx";
import { FaCode } from "react-icons/fa";
import {
  FcAbout,
  FcBiotech,
  FcBriefcase,
  FcBusinessContact,
  FcReadingEbook,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="https://picsum.photos/200/300" alt="profile pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <RxHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FaCode />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcBriefcase /> Work Experience
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                title="Home"
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <RxHome />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                title="About"
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcAbout />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                title="Education"
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcReadingEbook />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                title="TechStack"
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBiotech />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                title="Projects"
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FaCode />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                title="Work-Experience"
                to="work"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBriefcase />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                title="Contact"
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBusinessContact />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
