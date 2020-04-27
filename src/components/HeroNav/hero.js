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
      <div className="hero is-small is-success is-bold">
        <div className="hero-body">
          <nav id="myNav" className="navbar is-success" role="navigation" aria-label="site nav">
            <div className="container">
              <div className="navbar-brand">
                <h1 id="myName" className="navbar-item is-size-3">
                  Curtis Allen
                        </h1>
                <button className="navbar-burger burger button is-success" aria-label="menu" aria-expanded="false"
                                data-target="mainNav">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </button>
              </div>
              <div id="mainNav" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item" href="/">About Me</a>
                  <a className="navbar-item" href="portfolio">Portfolio</a>
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