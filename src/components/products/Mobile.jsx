import React, { useState } from "react";
import items from "../productsData/mobile";
import Item from "./Item";
import Proceed from "./Proceed";

function Mobile() {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders"))
      ? JSON.parse(localStorage.getItem("orders"))
      : []
  );

  function addOrder(newOrder) {
    let isAlreadyPresent = false;
    let newOrders = [...orders];
    newOrders.forEach((order) => {
      if (order.id == newOrder.id) {
        //already present in the cart
        isAlreadyPresent = true;
        order.count++;
      }
    });
    if (!isAlreadyPresent) {
      //add new order
      newOrders.push({ ...newOrder, count: 1 });
    }
    setOrders(newOrders);
    localStorage.setItem("orders", JSON.stringify(newOrders));
  }
  function removeOrder(order_id) {
    setOrders((prev) => {
      return prev.filter((order) => order.id !== order_id);
    });
    localStorage.setItem(
      "orders",
      JSON.stringify(orders.filter((order) => order.id !== order_id))
    );
  }
  return (
    <div className="product-section">
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

export default Mobile;
