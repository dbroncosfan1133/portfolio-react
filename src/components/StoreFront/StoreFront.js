import React from "react";
import StorefrontDemo from "../../images/StorefrontDemo.jpg";

function StoreFront() {
  return (
    <div>
      <figure className="image mt-2">
        <a href="https://ecommercesitedemo.herokuapp.com/"><img className="img"
          src={StorefrontDemo} alt="Project 2 Store Front Demo"
          title="Store Front Demo" /></a>
      </figure>
      <hr />
      <a className="is-size-5" href="https://ecommercesitedemo.herokuapp.com">Store Front Demo</a>
      <hr />
      <div className="is-size-6">Github Page:</div>
      <a className="is-size-6" href="https://github.com/bchansen123/storePage">View the Code</a>
    </div>
  )
}

export default StoreFront;