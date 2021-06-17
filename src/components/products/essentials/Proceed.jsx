import React, { useState } from "react";
import Order from "./Order";
import priceSymbol from "./priceSymbol";
import { Fade } from "react-awesome-reveal";

function Proceed(props) {
  let content = null;
  const [showForm, setShowForm] = useState(false);
  if (props.orders.length > 0) {
    let totalPrice = props.orders.reduce(
      (accum, order) => accum + order.count * order.price,
      0
    );
    content = (
      <div className="proceed">
        <div>
          <h4>Total: {priceSymbol(totalPrice)}</h4>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Proceed
        </button>
      </div>
    );
  }

  return (
    <div>
      {props.orders.length === 0 ? (
        <p className="cart-head">Cart is empty</p>
      ) : props.orders.length === 1 ? (
        <p className="cart-head">{props.orders.length} item in cart</p>
      ) : (
        <p className="cart-head">{props.orders.length} items in cart</p>
      )}
      {props.orders.map((order) => {
        return (
          <Fade triggerOnce direction="left">
            <Order
              key={order.id}
              order={order}
              removeOrder={props.removeOrder}
            />
          </Fade>
        );
      })}

      {content}
      {showForm && (
        <Fade triggerOnce direction="right">
          <form className="bg-light p-3 my-5">
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={() => setShowForm(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="form-group">
              <label for="address">address</label>
              <input type="text" id="address" className="form-control" />
            </div>
            <button type="submit" className="btn btn-success">
              Pay
            </button>
          </form>
        </Fade>
      )}
    </div>
  );
}

export default Proceed;
