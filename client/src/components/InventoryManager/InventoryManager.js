import React from "react";
import HairSalon from "../../images/SalonInventory.jpg";

function InventoryManager() {
  return (
    <div>
      <figure className="image mt-2">
        <a href="https://lginventorymngr.herokuapp.com/"><img className="img"
          src={HairSalon} alt="Project 2 Store Front Demo"
          title="Hair Salon Inventory Manager" /></a>
      </figure>
      <hr />
      <a className="is-size-5" href="https://lginventorymngr.herokuapp.com/">Hair Salon Inventory Manager</a>
      <hr />
      <div className="is-size-6">Github Page:</div>
      <a className="is-size-6" href="https://github.com/dbroncosfan1133/inventory-manager">View the Code</a>
    </div>
  )
}

export default InventoryManager;