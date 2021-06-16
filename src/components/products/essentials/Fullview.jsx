import React from "react";
import priceSymbol from "./priceSymbol";

function Fullview(props) {
  return (
    <div className="full-view">
      <div className="row">
        <div className="col-6 full-img">
          <img src={props.item.image} alt={props.item.title} />
        </div>
        <div className="col-6">
          <div className="full-detail">
            <h3>{props.item.title}</h3>
            <h5>Rating: {props.item.rating}</h5>
            <h5>Price: {priceSymbol(props.item.price)}</h5>
            <button
              className="btn btn-lg btn-warning"
              onClick={() => props.addItem(props.item)}
            >
              add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fullview;
