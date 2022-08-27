import React from "react";
//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import EmailIcon from "@material-ui/icons/Email";
//import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import FrontendTools from "../assets/FrontendTools.png";
import BackendTools from "../assets/BackendTools.png";
import Languages from "../assets/Languages.png";
import study from "../assets/study.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Welcome!</h2>
        <div className="prompt">
          <p color="#f0f0f0">
            <div>
              <img src={study} alt="logos for frontend tools" />
            </div>
            My name is Kamaria, and I'm a software developer!{" "}
            {/*I've found that
            being in the posture of a student keeps you youthful.{" "}
            So whether I
            am learning from family/friends, life, or picking up new skills, I
  find value in it all!*/}
          </p>
          {/* <LinkedInIcon />
          <EmailIcon />
  <GithubIcon /> */}
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            {/*<span className="leftSpan">
              ReactJS, Redux, HTML, CSS, NPM, SemanticUI, BootStrap, MaterialUI,
              Yarn, Mural, Adobe XD
</span>*/}
            <div>
              <img src={FrontendTools} alt="logos for frontend tools" />
            </div>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            {/*<span>Node, Express, MySQL, MongoDB</span>*/}
            <div>
              <img src={BackendTools} alt="logos for frontend tools" />
            </div>
          </li>
          <li className="item">
            <h2>Languages</h2>
            {/*<span>JavaScript, Python, TypeScript</span>*/}
            <div>
              <img src={Languages} alt="logos for frontend tools" />
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
