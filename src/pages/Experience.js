import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#00675b">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#52c7b8", color: "#494949" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Georgia State University{" "}
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p className="expPara"> Psychology</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2019"
          iconStyle={{ background: "#52c7b8", color: "#494949" }}
          icon={<LaptopMacIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Web Development Bootcamp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Interapt/City of Refuge{" "}
          </h4>
          <p className="expPara">
            Full stack Web Developer Apprentice. Developed vibrant end-to-end
            web applications using MERN stack and other industry leading
            technologies and techniques.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#fff176", color: "#494949" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Accenture </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Application Development Associate
          </h4>
          <p className="expPara">
            Manage Large IT project using Scrum framework. Identify client
            requirements and define business solution; research, gather and
            synthesize information as a Business Analyst.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#fff176", color: "#494949" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Accenture </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Application Development Analyst
          </h4>
          <p className="expPara">
            Improve client’s user experience by using industry best practices to
            drive traffic up 55% and hold customer engagement to reduce fallout.
            Developed 2 large projects using React and Salesforce.com. while
            implementing UX design and Salesforce.com skills.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2021"
          iconStyle={{ background: "#fff176", color: "#494949" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Accenture </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Instructional Design Analyst
          </h4>
          <p className="expPara">
            Developed 2 internal company courses using Desire2Learn, HTML, CSS
            and Javascript. Developed onboarding training materials for new
            hires.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
