import React from "react";
import concate from "./concate";
import priceSymbol from "./priceSymbol";

function Item(props) {
  const newOrder = {
    id: props.item._id,
    title: props.item.title,
    image: props.item.image,
    price: props.item.price,
  };

  return (
    <>
      <div className="card">
        <div className="img">
          <img
            className="card-img-top"
            src={props.item.image}
            alt={props.item.title}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title" onClick={() => props.showDetail(newOrder)}>
            {concate(props.item.title, 50)}
          </h5>
        </div>
        <div className="card-body price-cart">
          <h4 className="card-text">{priceSymbol(props.item.price)}</h4>
          <button
            className="btn btn-warning"
            onClick={() => props.addItem(newOrder)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Item;
