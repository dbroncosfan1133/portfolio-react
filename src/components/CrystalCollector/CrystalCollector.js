import React from "react";
import Crystal from "../../images/crystal_collector.jpg";

function CrystalApp() {
  return (
    <div>
      <figure className="image mt-2">
        <a href="https://dbroncosfan1133.github.io/unit-4-game/"><img className="img"
          src={Crystal} alt="Crystal Collector"
          title="Crystal Collector" /></a>
      </figure>
      <hr />
      <a className="is-size-5" href="https://dbroncosfan1133.github.io/unit-4-game/">Crystal Collector</a>
      <hr />
      <div className="is-size-6">Github Page:</div>
      <a className="is-size-6" href="https://github.com/dbroncosfan1133/unit-4-game">View the Code</a>
    </div>
  )
}

export default CrystalApp;