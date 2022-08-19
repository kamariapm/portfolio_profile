import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        {<a href="https://www.w3schools.com"></a>}
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <MailOutlineIcon />
      </div>
      <p> &copy; 2022 kamariainman.com</p>
    </div>
  );
}

export default Footer;
