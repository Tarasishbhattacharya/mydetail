

import React from "react";
import "./contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

export default function Contact() {
  return (
    <div className="main" id="contact">
      <div className="contact">
        <h1>Contact</h1>
        <div className="line"></div>
        <div className="contact_inf">
        <div className="parag">
          <h2>Just say Hi</h2>
          <p>
            I'M ALWAYS OPEN TO DISCUSS YOUR/MY PROJECT AND TALK ABOUT NEW
            THINGS.
          </p>

          <p>LET'T GET IN TOUCH AND MAKE SOMETHING AMAZING TOGETHER.</p>

          <div className="contact_icon">
            <div className="call">
              <div>Call me at:</div>
              <p>+91-7003063362</p>
              </div>
               <div className="call">
              <div>Mail me at:</div>
              <p>tarasishb@gmail.com</p>
            </div>
            
            </div>
            <div className="icoL">
                <div className="icoL_icon">
                  
                <a href="mailto:tarasishb@gmail.com"><EmailIcon style={{width: "60px",
    height: "50px"}}/></a>
                
              </div>

                <div className="icoL_icon">
                  <a target="_blank" href="https://www.linkedin.com/in/tarasish-bhattacharya-41413a176/"><LinkedInIcon style={{width: "60px",
    height: "50px"}}/></a>
                
              </div>

                <div className="icoL_icon">
                  <a target="_blank" href="https://github.com/Tarasishbhattacharya"><GitHubIcon style={{width: "60px",
    height: "45px"}}/></a>
                
              </div>
            </div>
          </div>
          <div className="gif">
            <img src={"assets/email3.gif"} alt="" />
          </div>
          
</div>
      </div>
    </div>
  );
}
