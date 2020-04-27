import React from "react";
import GoogleYelp from "../../images/Yelp_Google_maps_group_project.jpg";

function Yelp_Google() {
  return (
    <div>
      <figure className="image mt-2">
        <a href="https://dallinrodgers.github.io/Project-One/"><img className="img"
          src={GoogleYelp} alt="Things to do, places to see"
          title="Things to do, places to see" /></a>
      </figure>
      <hr />
      <a className="is-size-5" href="https://dallinrodgers.github.io/Project-One/">Yelp, Google Maps Group
        Project</a>
      <hr />
      <div className="is-size-6">Github Page:</div>
      <a className="is-size-6" href="https://github.com/DallinRodgers/Project-One">View the Code</a>
    </div>
  )
}

export default Yelp_Google;