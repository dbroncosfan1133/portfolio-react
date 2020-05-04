import React from "react";
import HeroNav from "../components/HeroNav/hero";
import "./pages.css";
import InventoryManager from "../components/InventoryManager/InventoryManager";
import StoreFront from "../components/StoreFront/StoreFront";
import YelpGoogle from "../components/YelpGoogle/YelpGoogle";
import BurgerApp from "../components/Burger/Burger";
import BamazonApp from "../components/Bamazon/Bamazon";
import LiriNodeApp from "../components/LiriNodeApp/LiriNodeApp";
import TrainTrackerApp from "../components/TrainTracker/TrainTracker";
import CrystalApp from "../components/CrystalCollector/CrystalCollector";
import PlatingApp from "../components/PlatingTracker/PlatingTracker";

class PortfolioPage extends React.Component {
  render() {
    return (
      <div className="backgroundImg">
        <HeroNav />
        <div className="container">
          <div className="card">
            <header className="card-header" id="aboutHead">
              <h1 className="about">Project Links</h1>
            </header>
            <div className="card-content">
              <div className="card is-shadowless">
                <header className="card-header is-shadowless">
                  <h1 className="group">Group Projects:</h1>
                </header>
                <div className="card-content groupCard">
                  <div className="content">
                    <div className="tile is-ancestor">
                      <div className="tile is-parent">
                        <div className="tile is-child box">
                          <InventoryManager />
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child box">
                          <StoreFront />
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child box">
                          <YelpGoogle />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card is-shadowless">
                <header className="card-header is-shadowless">
                  <h1 className="group">Individual Projects:</h1>
                </header>
                <div className="card-content individualCard">
                  <div className="content">
                    <div className="tile is-ancestor">
                      <div className="tile is-parent">
                        <div class="tile is-child box">
                          <BurgerApp />
                        </div>
                      </div>
                      <div class="tile is-parent">
                        <div class="tile is-child box">
                          <BamazonApp />
                        </div>
                      </div>
                      <div class="tile is-parent">
                        <div class="tile is-child box">
                          <LiriNodeApp />
                        </div>
                      </div>
                    </div>
                    <div className="tile is-ancestor">
                      <div className="tile is-parent">
                        <div className="tile is-child box">
                          <TrainTrackerApp />
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child box">
                          <CrystalApp />
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <div className="tile is-child box">
                          <PlatingApp />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

    )
  }
}

export default PortfolioPage;