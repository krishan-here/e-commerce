import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Feature() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active feature">
          <div className="row">
            <div className="col-8">
              <div className="trend-img">
                <img src="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UL480_FMwebp_QL65_.jpg" />
              </div>
            </div>
            <div className="col-4">
              <div className="new-arrival">
                <h4>#lappy</h4>
                <h3>MacBook pro 8</h3>
                <button className="btn btn-lg btn-warning">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item feature">
          <div className="row">
            <div className="col-8">
              <div className="trend-img">
                <img src="https://m.media-amazon.com/images/I/61kFG31YCsL._AC_UY327_FMwebp_QL65_.jpg" />
              </div>
            </div>
            <div className="col-4">
              <div className="new-arrival">
                <h4>#handFree</h4>
                <h3>Boat ultra X</h3>
                <button className="btn btn-lg btn-warning">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item feature">
          <div className="row">
            <div className="col-8">
              <div className="trend-img">
                <img src="https://m.media-amazon.com/images/I/714Mg+6MoFL._AC_UY327_FMwebp_QL65_.jpg" />
              </div>
            </div>
            <div className="col-4">
              <div className="new-arrival">
                <h4>#Mobo</h4>
                <h3>Apple ultra pro 9</h3>
                <button className="btn btn-lg btn-warning">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span aria-hidden="true">
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span aria-hidden="true">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>

        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Feature;
