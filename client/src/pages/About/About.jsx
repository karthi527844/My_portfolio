import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about_image">
              <img src="https://picsum.photos/200/300" alt="profile_image" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about_content">
              <h1>About Me</h1>
              <p>
                Hi, I am a software developer with a passion for creating
                innovative and user-friendly applications. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Nesciunt ipsa error
                voluptatibus illo eos pariatur ipsum ut molestiae quis,
                reiciendis possimus cumque quia laborum dolores neque adipisci
                minima accusantium eaque? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Debitis adipisci, veritatis eos reiciendis cum
                autem ipsum ipsa. Beatae commodi dolores quam laudantium
                architecto? Tempore asperiores non, ut tenetur fugiat delectus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                aliquid exercitationem, laboriosam, inventore itaque voluptate
                corporis obcaecati ratione quae voluptatem tempora veniam magni
                quidem! Voluptatibus, exercitationem cum? Adipisci, optio
                nesciunt.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
