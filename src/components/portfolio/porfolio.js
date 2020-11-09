import React, { Component } from "react";

import "./portfolio.css";
import gastreet from "../../img/gastreet-1.png";
import huindai from "../../img/hundai.jpg";
import hksochi from "../../img/./hk-sochi.png";
import rzd from "../../img/rzd.jpeg";

export default class Portfolio extends Component {
  state = {
    arr: [gastreet, huindai, hksochi, rzd],
  };

  renderItem() {
    const imgStyle = {
      width: 200 + "px",
      height: 123 + "px",
    };
    return this.state.arr.map((item) => {
      return (
        <div
          key={Math.floor(Math.random() * 120 + 40)}
          className="col-sm-auto imgs"
        >
          <img src={item} alt="portfolio imgs" style={imgStyle} />
        </div>
      );
    });
  }

  render() {
    const render = this.renderItem();
    return (
      <section className="portfolio_wrapper">
        <div className="container">
          <div className="portfolio_imgs">
            <div className="row justify-content-between text-center">
              {render}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
