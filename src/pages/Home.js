import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Kamaria</h2>
        <div className="prompt">
          <p>
            I'm a software developer! I've found that being in the posture of a
            student keeps you youthful. So whether I am learning from
            family/friends, life, picking up new skills etc, I find value in it
            all!
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, SemanticUI, BootStrap, MaterialUI,
              Yarn,
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Node, Express, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
