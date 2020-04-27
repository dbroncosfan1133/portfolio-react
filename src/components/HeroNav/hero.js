import React from "react";

class HeroNav extends React.Component {
  componentDidMount() {
    this.mobile();
  }

  mobile = () => {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector("#" + burger.dataset.target);

    burger.addEventListener("click", function () {
      burger.classList.toggle("is-active");
      nav.classList.toggle("is-active");
    });
  }
  
  render() {
    return (
      <div className="hero is-small is-success">
        <div className="hero-body">
          <nav id="myNav" className="navbar is-success is-bold" role="navigation" aria-label="site nav">
            <div className="container">
              <div className="navbar-brand">
                <h1 id="myName" className="navbar-item is-size-3">
                  Curtis Allen
                        </h1>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                                data-target="mainNav">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
              </div>
              <div id="mainNav" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item" href="index.html">About Me</a>
                  <a className="navbar-item" href="portfolio.html">Portfolio</a>
                  <a className="navbar-item" href="contact.html">Contact Me</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default HeroNav;