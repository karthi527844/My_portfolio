import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center">Education Details</h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            date="2020 - 2023"
            dateClassName="custom-date"
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Diploma in Computer Science
            </h3>
            <hr />
            <h4 className="vertical-timeline-element-subTitle">
              Sri Krishna polytechnic
            </h4>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            date="2010 - 2020"
            dateClassName="custom-date"
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">School(Class X)</h3>
            <hr />
            <h4 className="vertical-timeline-element-subTitle">
              Priyadharshinie Public School
            </h4>
            <h4 className="vertical-timeline-element-subtitle">Bengaluru</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
