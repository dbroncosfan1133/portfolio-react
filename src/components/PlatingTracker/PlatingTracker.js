import React from "react";
import Plating from "../../images/plating_tracker.jpg";

function PlatingApp() {
  return (
    <div>
      <figure className="image mt-2">
        <a href="https://dbroncosfan1133.github.io/Plating-Tracker/"><img className="img"
          src={Plating} alt="Live Plating Rate Tracker"
          title="Plating Rate Tracker" /></a>
      </figure>
      <hr />
      <a className="is-size-5" href="https://dbroncosfan1133.github.io/Plating-Tracker/">Plating Rate Tracker Live
        Update</a>
      <hr />
      <div className="is-size-6">Github Page:</div>
      <a className="is-size-6" href="https://github.com/dbroncosfan1133/Plating-Tracker">View the Code</a>
    </div>
  )
}

export default PlatingApp;