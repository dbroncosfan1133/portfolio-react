import React from "react";
import HeroNav from "../components/HeroNav/hero";
import "./pages.css";
import HairSalon from "../images/SalonInventory.jpg";
import StorefrontDemo from "../images/StorefrontDemo.jpg";
import GoogleYelp from "../images/Yelp_Google_maps_group_project.jpg";
import EatBurger from "../images/burger-app.jpg";
import BamazonImg from "../images/Customer-2.jpg";
import LiriApp from "../images/Walkthrough-Step-2.jpg";
import TrainTracker from "../images/Train_tracker.jpg";
import Crystal from "../images/crystal_collector.jpg";
import Plating from "../images/plating_tracker.jpg";

class PortfolioPage extends React.Component {
  render() {
    return (
      <div className="backgroundImg">
        <HeroNav />
        <div className="container">
          <div className="card">
            <header className="card-header" id="aboutHead">
              <h1 id="about">Project Links</h1>
            </header>
            <div className="card-content">
              <div className="content">
                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <div className="tile is-child box">
                      <figure className="image mt-2">
                        <a href="https://lginventorymngr.herokuapp.com/"><img className="img"
                          src={HairSalon} alt="Project 2 Store Front Demo"
                          title="Hair Salon Inventory Manager" /></a>
                      </figure>
                      <hr />
                      <a className="mt-2" href="https://lginventorymngr.herokuapp.com/">Hair Salon Inventory Manager</a>
                      <hr />
                      <p>Github Page:</p>
                      <a className="mt-2" href="https://github.com/dbroncosfan1133/inventory-manager">View the Code</a>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child box">
                      <figure className="image mt-2">
                        <a href="https://ecommercesitedemo.herokuapp.com/"><img className="img"
                          src={StorefrontDemo} alt="Project 2 Store Front Demo"
                          title="Store Front Demo" /></a>
                      </figure>
                      <hr />
                      <a className="mt-2" href="https://ecommercesitedemo.herokuapp.com">Store Front Demo</a>
                      <hr />
                      <p>Github Page:</p>
                      <a className="mt-2" href="https://github.com/bchansen123/storePage">View the Code</a>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child box">
                      <figure className="image mt-2">
                        <a href="https://dallinrodgers.github.io/Project-One/"><img className="img"
                          src={GoogleYelp} alt="Things to do, places to see"
                          title="Things to do, places to see" /></a>
                      </figure>
                      <hr />
                      <a className="mt-2" href="https://dallinrodgers.github.io/Project-One/">Yelp, Google Maps Group
                  Project</a>
                      <hr />
                      <p>Github Page:</p>
                      <a className="mt-2" href="https://github.com/DallinRodgers/Project-One">View the Code</a>
                    </div>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <div class="tile is-child box">
                      <figure class="image mt-2">
                        <a href="https://hidden-sands-28956.herokuapp.com/"><img class="img"
                          src={EatBurger} alt="Eat the Burger"
                          title="Eat the Burger Backend App" /></a>
                      </figure>
                      <hr />
                      <a class="mt-2" href="https://hidden-sands-28956.herokuapp.com/">Eat the Burger App</a>
                      <hr />
                      <p>Github Page:</p>
                      <a className="mt-2" href="https://github.com/dbroncosfan1133/burger">View the Code</a>
                    </div>
                  </div>
                  <div class="tile is-parent">
                    <div class="tile is-child box">
                      <figure class="image mt-2">
                        <a href="https://youtu.be/bfWTA1tzQ8E"><img class="img" src={BamazonImg}
                          alt="Bamazon Video Link" title="Bamazon MySQL App" /></a>
                      </figure>
                      <hr />
                      <a class="mt-2" href="https://youtu.be/bfWTA1tzQ8E">Bamazon MySQL App</a>
                      <hr />
                      <p>Github Page:</p>
                      <a className="mt-2" href="https://github.com/dbroncosfan1133/bamazonSQL">View the Code</a>
                    </div>
                  </div>
                  <div class="tile is-parent">
                    <div class="tile is-child box">
                      <figure class="image mt-2">
                        <a href="https://youtu.be/u0ZGrG-b5jE"><img class="img"
                          src={LiriApp} alt="Liri Node App"
                          title="Liri Node App" /></a>
                      </figure>
                      <hr />
                      <a class="mt-2" href="https://youtu.be/u0ZGrG-b5jE">Liri Node App</a>
                      <hr />
                      <p>Github Page:</p>
                      <a className="mt-2" href="https://github.com/dbroncosfan1133/liri-node-app">View the Code</a>
                    </div>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <div className="tile is-child box">
                      <figure className="image mt-2">
                        <a href="https://dbroncosfan1133.github.io/Train-Time-Tracker/"><img className="img"
                          src={TrainTracker} alt="Train Tracker" title="Train Tracker" /></a>
                      </figure>
                      <hr />
                      <a className="mt-2" href="https://dbroncosfan1133.github.io/Train-Time-Tracker/">Train
                  Tracker</a>
                      <hr />
                      <p>Github Page:</p>
                      <a className="mt-2" href="https://github.com/dbroncosfan1133/Train-Time-Tracker">View the Code</a>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child box">
                      <figure className="image mt-2">
                        <a href="https://dbroncosfan1133.github.io/unit-4-game/"><img className="img"
                          src={Crystal} alt="Crystal Collector"
                          title="Crystal Collector" /></a>
                      </figure>
                      <hr />
                      <a className="mt-2" href="https://dbroncosfan1133.github.io/unit-4-game/">Crystal Collector</a>
                      <hr />
                      <p>Github Page:</p>
                      <a className="mt-2" href="https://github.com/dbroncosfan1133/unit-4-game">View the Code</a>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child box">
                      <figure className="image mt-2">
                        <a href="https://dbroncosfan1133.github.io/Plating-Tracker/"><img className="img"
                          src={Plating} alt="Live Plating Rate Tracker"
                          title="Plating Rate Tracker" /></a>
                      </figure>
                      <hr />
                      <a className="mt-2" href="https://dbroncosfan1133.github.io/Plating-Tracker/">Plating Rate Tracker Live
                        Update</a>
                      <hr />
                      <p>Github Page:</p>
                      <a className="mt-2" href="https://github.com/dbroncosfan1133/Plating-Tracker">View the Code</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioPage;