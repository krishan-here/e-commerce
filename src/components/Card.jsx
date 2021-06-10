import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Headphone from "./products/Headphone";
import Computer from "./products/Computer";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Card(props) {
  return (
    <Router>
      {props.showCards ? (
        <div className="row card-section">
          <div className="col-lg-4">
            <div className="custom-card computer-card">
              <div className="show">
                <div>Computer</div>
                <Link to="/computer">
                  <button
                    className="btn btn-warning"
                    onClick={props.showProduct}
                  >
                    <div>Shop</div>
                    <div className="arrow">
                      <ArrowForwardIcon />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="custom-card mobile-card">
              <div className="show">
                <div>Mobile</div>
                <button className="btn btn-lg btn-warning">Shop</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="custom-card headphone-card">
              <div className="show">
                <div>Headphone</div>
                <Link to="/headphone">
                  <button
                    className="btn btn-warning"
                    onClick={props.showProduct}
                  >
                    <div>Shop</div>
                    <div className="arrow">
                      <ArrowForwardIcon />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Switch>
          <Route path="/headphone">
            <Headphone />
          </Route>
          <Route path="/computer">
            <Computer />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default Card;
