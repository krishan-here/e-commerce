import React from "react";
import items from "../productsData/headphone";
import Item from "./Item";
import Proceed from "./Proceed";

function Headphone() {
  return (
    <div>
      <h2>Headphone Section</h2>
      <div className="row">
        <div className="col-9">
          <div className="row justify-content-around">
            {items.map((item) => {
              return (
                <Item
                  key={item._id}
                  title={item.title}
                  img={item.image}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <Proceed />
        </div>
      </div>
    </div>
  );
}

export default Headphone;
