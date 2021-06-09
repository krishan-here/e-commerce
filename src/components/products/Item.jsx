import React from "react";
import concate from "./concate";
import priceSymbol from "./priceSymbol";

function Item(props) {
  const newOrder = {
    id: props.id,
    title: props.title,
    image: props.img,
    price: props.price,
  };

  return (
    <div className="card" style={{ width: "18rem", marginBottom: "10px" }}>
      <img
        className="card-img-top"
        src={props.img}
        alt={props.title}
        style={{ height: "300px" }}
      />
      <div className="card-body" style={{ height: "100px" }}>
        <h5 className="card-title">{concate(props.title)}</h5>
      </div>
      <div className="card-body price-cart">
        <h4 className="card-text">{priceSymbol(props.price)}</h4>
        <button
          className="btn btn-warning"
          onClick={() => props.addItem(newOrder)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
