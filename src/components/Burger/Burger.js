import React from "react";
import EatBurger from "../../images/burger-app.jpg";

function BurgerApp() {
  return (
    <div>
      <figure class="image mt-2">
        <a href="https://hidden-sands-28956.herokuapp.com/"><img class="img"
          src={EatBurger} alt="Eat the Burger"
          title="Eat the Burger Backend App" /></a>
      </figure>
      <hr />
      <a class="is-size-5" href="https://hidden-sands-28956.herokuapp.com/">Eat the Burger App</a>
      <hr />
      <div className="is-size-6">Github Page:</div>
      <a className="is-size-6" href="https://github.com/dbroncosfan1133/burger">View the Code</a>
    </div>
  )
}

export default BurgerApp;