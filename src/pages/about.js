import React from "react";
import HeroNav from "../components/HeroNav/hero";
import MyPic from "../images/DSC07299.jpg";
import "./pages.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="backgroundImg">
        <HeroNav />
        <div className="container">
          <div className="card">
            <header className="card-header" id="aboutHead">
              <h1 id="about">About Me</h1>
            </header>
            <div className="card-content">
              <div className="content">
                <img class="img" src={MyPic} alt="Curtis Allen" id="bio-img" />
                <p>Welcome to my portfolio page!</p>
                <br />
                <p>I have a certificate in Coding from the University of Utah.  I also graduated from Utah
                State University with a B.S. in Agricultural Systems Technologies in 2011.  I recently switched careers from a Production
                Supervisor in a PCB manufacturing facility to a Application Support Specialist
                where I work with Case Management Software.  I look forward to continuing to learn and grow my knowledge in
                Full Stack Web Development!
            </p>
                <br />
                <p>I love everything electronics related and have a passion for PC's. I have
                built and upgraded 3 of my own personal computers, a home theater PC (HTPC), a personal Unraid Server, and sadly haha, my prize possession, a
                high-end gaming rig complete with a custom watercooled loop.
            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage;