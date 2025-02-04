import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkEx.css";
import { FaLaptopCode } from "react-icons/fa";

const WorkEx = () => {
  return (
    <>
      <div className="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center">Work Experience</h2>
          <hr />
          <VerticalTimeline lineColor="black">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - 2024"
              iconStyle={{ background: "black", color: "#fff" }}
              icon={<FaLaptopCode />}
            >
              <h3 className="vertical-timeline-element-title">
                Student Intern
              </h3>
              <hr />
              <h4 className="vertical-timeline-element-subtitle">
                RevoSeven Technologies
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                Yelahanka, Bengaluru
              </h5>
              <p>Front-end Development, Web Development</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};
export default WorkEx;
