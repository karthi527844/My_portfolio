import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Resume from "../../Assets/Docs/Karthik_Resume_CV(Main).pdf";
import "./Home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleThemeChange}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
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
          </Fade>
          <Fade bottom>
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
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
