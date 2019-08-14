import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row ">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">name des s</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">preis</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">menge</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">wegnehmen</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">zusammen</p>
          </div>
        </div>
      </div>
    );
  }
}
