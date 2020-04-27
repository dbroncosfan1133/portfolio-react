import React from "react";
import LiriApp from "../../images/Walkthrough-Step-2.jpg";

function LiriNodeApp() {
  return (
    <div>
      <figure class="image mt-2">
        <a href="https://youtu.be/u0ZGrG-b5jE"><img class="img"
          src={LiriApp} alt="Liri Node App"
          title="Liri Node App" /></a>
      </figure>
      <hr />
      <a class="is-size-5" href="https://youtu.be/u0ZGrG-b5jE">Liri Node App</a>
      <hr />
      <div className="is-size-6">Github Page:</div>
      <a className="is-size-6" href="https://github.com/dbroncosfan1133/liri-node-app">View the Code</a>
    </div>
  )
}

export default LiriNodeApp;