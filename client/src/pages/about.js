import React from "react";
import HeroNav from "../components/HeroNav/hero";
import MyPic from "../images/DSC07299.jpg";
import "./pages.css";
import ContactInfo from "../components/Contact/contact";

class MainPage extends React.Component {
  render() {
    return (
      <div className="backgroundImg">
        <HeroNav />
        <div className="container">
          <div className="card">
            <header className="card-header" id="aboutHead">
              <h1 className="about">About Me</h1>
            </header>
            <div className="card-content">
              <div className="content">
                <img class="img" src={MyPic} alt="Curtis Allen" id="bio-img" />
                <p>Welcome to my portfolio page!</p>
                <br />
                <p>I have recently earned a certificate in Full Stack Web Development from the University of Utah.  I also graduated from Utah
                State University with a B.S. in Agricultural Systems Technologies in 2011.  I recently switched careers from a Production
                Supervisor in a PCB manufacturing facility to a Application Support Specialist
                where I work with Case Management Software.  Unfortunantely due to Covid-19 and the current economic situation, I experienced a 
                temporary setback in my pursuit of a new career and was laid-off.  I am starting out again in the pursuit of a new career and am excited for the great things
                to come!
            </p>
                <br />
                <p>I love building things and working with my hands, it excites me to see my projects come to fruition; ranging from web applications
                to wood working projects to building my own PC's.  I absolutely love everything electronics related and have a passion for PC's. I have
                built and upgraded 3 of my own personal computers, a home theater PC (HTPC), a personal Unraid Server, and a high-end gaming rig complete 
                with a custom hard tubing watercooled loop.  Of course all the hard line tubes were cut and bent by hand!
            </p>
              </div>
            </div>
          </div>
          <br />
          <ContactInfo />
          <div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage;