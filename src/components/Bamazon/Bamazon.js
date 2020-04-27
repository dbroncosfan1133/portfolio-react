import React from "react";
import BamazonImg from "../../images/Customer-2.jpg";

function BamazonApp() {
  return (
    <div>
      <figure class="image mt-2">
        <a href="https://youtu.be/bfWTA1tzQ8E"><img class="img" src={BamazonImg}
          alt="Bamazon Video Link" title="Bamazon MySQL App" /></a>
      </figure>
      <hr />
      <a class="is-size-5" href="https://youtu.be/bfWTA1tzQ8E">Bamazon MySQL App</a>
      <hr />
      <div className="is-size-6">Github Page:</div>
      <a className="is-size-6" href="https://github.com/dbroncosfan1133/bamazonSQL">View the Code</a>
    </div>
  )
}

export default BamazonApp;