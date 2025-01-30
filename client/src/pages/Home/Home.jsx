import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../Assets/Docs/Karthik_Resume_CV(Main).pdf";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1>Hi I'm </h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer!",
                  "MERN Stack Developer!",
                  "Web Developer!",
                  "Front end Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a
              className="btn btn-cv"
              href={Resume}
              download="karthik_resume.pdf"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
