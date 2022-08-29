import React from "react";
//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import EmailIcon from "@material-ui/icons/Email";
//import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import FrontendTools from "../assets/FrontendTools.png";
import BackendTools from "../assets/BackendTools.png";
import Languages from "../assets/Languages.png";
//import Wfh from "../assets/Wfh.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Welcome!</h2>
        <div className="prompt">
          <div color="#494949">
            My name is Kamaria, and I'm a software developer.{" "}
            {/*I've found that
            being in the posture of a student keeps you youthful.{" "}
            So whether I
            am learning from family/friends, life, or picking up new skills, I
  find value in it all!*/}
          </div>{" "}
          {/*<div>
            {" "}
            <img src={Wfh} alt="logos for frontend tools" />
          </div>*/}
          {/* <LinkedInIcon />
          <EmailIcon />
  <GithubIcon /> */}
        </div>
      </div>
      <div className="skills" style={{ backgroundColor: "#ffffff" }}>
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            {/*<span className="leftSpan">
              ReactJS, Redux, HTML, CSS, NPM, SemanticUI, BootStrap, MaterialUI,
              Yarn, Mural, Adobe XD
</span>*/}
            <div className="images">
              <img src={FrontendTools} alt="logos for frontend tools" />
            </div>
          </li>
          <hr />
          <li className="item">
            <h2>Back-End</h2>
            {/*<span>Node, Express, MySQL, MongoDB</span>*/}
            <div className="images">
              <img src={BackendTools} alt="logos for frontend tools" />
            </div>
          </li>
          <hr />
          <li className="item">
            <h2>Languages</h2>
            {/*<span>JavaScript, Python, TypeScript</span>*/}
            <div className="images">
              <img src={Languages} alt="logos for frontend tools" />
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
