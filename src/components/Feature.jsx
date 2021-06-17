import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Computer from "./products/Computer";
import Mobile from "./products/Mobile";
import Headphone from "./products/Headphone";

function Feature(props) {
  return (
    <Router>
      {!props.showFeatures.product ? (
        <>
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
                      <img
                        src="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UL480_FMwebp_QL65_.jpg"
                        alt="trend"
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="new-arrival">
                      <h4>#lappy</h4>
                      <h3>MacBook pro 8</h3>
                      <Link to="/computer">
                        <button
                          className="btn btn-lg btn-warning"
                          onClick={() => props.showProduct()}
                        >
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item feature">
                <div className="row">
                  <div className="col-8">
                    <div className="trend-img">
                      <img
                        src="https://m.media-amazon.com/images/I/61kFG31YCsL._AC_UY327_FMwebp_QL65_.jpg"
                        alt="trend"
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="new-arrival">
                      <h4>#handFree</h4>
                      <h3>Boat ultra X</h3>
                      <Link to="/headphone">
                        <button
                          className="btn btn-lg btn-warning"
                          onClick={() => props.showProduct()}
                        >
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item feature">
                <div className="row">
                  <div className="col-8">
                    <div className="trend-img">
                      <img
                        src="https://m.media-amazon.com/images/I/714Mg+6MoFL._AC_UY327_FMwebp_QL65_.jpg"
                        alt="trend"
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="new-arrival">
                      <h4>#Mobo</h4>
                      <h3>Apple ultra pro 9</h3>
                      <Link to="/mobile">
                        <button
                          className="btn btn-lg btn-warning"
                          onClick={() => props.showProduct()}
                        >
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </>
      ) : (
        <Switch>
          <Route path="/computer">
            <Computer />
          </Route>
          <Route path="/mobile">
            <Mobile />
          </Route>
          <Route path="/headphone">
            <Headphone />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default Feature;
