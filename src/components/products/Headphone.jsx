import React, { useState } from "react";
import items from "../productsData/headphone";
import Item from "./Item";
import Proceed from "./Proceed";

function Headphone() {
  const [orders, setOrders] = useState([]);

  function addOrder(newOrder) {
    setOrders((prev) => {
      return [...prev, newOrder];
    });
  }
  function removeOrder(order_id) {
    setOrders((prev) => {
      return prev.filter((order) => order.id !== order_id);
    });
    console.log(order_id);
  }
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
                  id={item._id}
                  title={item.title}
                  img={item.image}
                  price={item.price}
                  addItem={addOrder}
                />
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <Proceed orders={orders} removeOrder={removeOrder} />
        </div>
      </div>
    </div>
  );
}

export default Headphone;
