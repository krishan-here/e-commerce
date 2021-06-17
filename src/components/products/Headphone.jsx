import React, { useEffect, useState } from "react";
import Item from "./essentials/Item";
import Proceed from "./essentials/Proceed";
import { Fade } from "react-awesome-reveal";
import Fullview from "./essentials/Fullview";
import { Zoom } from "react-awesome-reveal";
import Modal from "react-modal";
import axios from "axios";

function Headphone() {
  const [productData, getproductData] = useState([]);
  const getAllProduct = () => {
    axios
      .get("http://localhost:8000/headphone")
      .then((response) => {
        getproductData(response.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  const [detail, setDetail] = useState({ isShow: false, show: null });
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders"))
      ? JSON.parse(localStorage.getItem("orders"))
      : []
  );

  function showDetail(item) {
    setDetail({ isShow: true, show: item });
  }
  function closeDetail() {
    setDetail({ isShow: false, show: null });
  }
  function addOrder(newOrder) {
    let isAlreadyPresent = false;
    let newOrders = [...orders];
    newOrders.forEach((order) => {
      if (order.id === newOrder.id) {
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
            <Fade
              className="animate__animated animate__fadeInUp"
              direction="up"
              cascade
              triggerOnce
            >
              {productData.map((item) => {
                return (
                  <Item
                    key={item._id}
                    item={item}
                    addItem={addOrder}
                    showDetail={showDetail}
                  />
                );
              })}
            </Fade>
          </div>
        </div>
        <div className="col-3">
          <Proceed orders={orders} removeOrder={removeOrder} />
        </div>
      </div>
      {detail.isShow && (
        <Modal isOpen={true} onRequestClose={closeDetail}>
          <Zoom triggerOnce className="animate__animated animate__zoomOut">
            <Fullview item={detail.show} addItem={addOrder} />
          </Zoom>
        </Modal>
      )}
    </div>
  );
}

export default Headphone;
