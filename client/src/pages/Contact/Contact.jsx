import React from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <Rotate top left>
                    <img
                      src="https://t4.ftcdn.net/jpg/00/88/74/49/360_F_88744916_2d10nlc9o5pYt7maCIQjZyePT7zL6Ujz.jpg"
                      alt="contact"
                      className="image"
                    />
                  </Rotate>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card2 d-flex card border-0 px-4 py-4">
                <Rotate bottom right>
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact Me
                        <GrLinkedin
                          color=" #0A66C2"
                          size={30}
                          className="ms-2"
                        />
                        <GrGithub color=" #181717" size={30} className="ms-2" />
                        <FaWhatsapp
                          color=" #25D366"
                          size={30}
                          className="ms-2"
                        />
                      </h6>
                    </div>
                    <div className="row px-3 md-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your E-mail"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </Rotate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
