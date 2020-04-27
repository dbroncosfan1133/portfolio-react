import React from "react";
import TrainTracker from "../../images/Train_tracker.jpg";

function TrainTrackerApp() {
  return (
    <div>
      <figure className="image mt-2">
        <a href="https://dbroncosfan1133.github.io/Train-Time-Tracker/"><img className="img"
          src={TrainTracker} alt="Train Tracker" title="Train Tracker" /></a>
      </figure>
      <hr />
      <a className="is-size-5" href="https://dbroncosfan1133.github.io/Train-Time-Tracker/">Train
                  Tracker</a>
      <hr />
      <div className="is-size-6">Github Page:</div>
      <a className="is-size-6" href="https://github.com/dbroncosfan1133/Train-Time-Tracker">View the Code</a>
    </div>
  )
}

export default TrainTrackerApp;