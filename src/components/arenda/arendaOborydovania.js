import React, { Component } from "react";

import "./arendaOborydovania.css";

import b1 from "../../img/bokalShampanskoe.jpg";
import b2 from "../../img/bokalKokteli.jpg";
import b3 from "../../img/shots.jpg";
import m1 from "../../img/mebelcomplect.jpg";
import m2 from "../../img/stoiki.jpg";
import m3 from "../../img/stol.jpg";
import i1 from "../../img/inv.jpg";
import i2 from "../../img/inv2.jpg";
import i3 from "../../img/inv1.jpg";

export default class ArendaOborydovania extends Component {
  state = {
    arr: [
      {
        img: b1,
        descr: "Бокалы для шампанского",
      },
      {
        img: b2,
        descr: "Бокалы для коктелей",
      },
      {
        img: b3,
        descr: "Шоты и стаканы",
      },
      {
        img: m1,
        descr: "Комплект: круглый стол (скатерть-чехол) и стулья",
      },
      {
        img: m2,
        descr: "Столы-стойки",
      },
      {
        img: m3,
        descr: "Столы",
      },
      {
        img: i1,
        descr: "Барный инвентарь",
      },
      {
        img: i2,
        descr: "Стойка для шампанского",
      },
      {
        img: i3,
        descr: "Стойки для горячих блюд",
      },
    ],
  };

  renderArendItems(arr) {
    return arr.map((item) => {
      return (
        <div className="items_rent" key={Math.random() * 140 + 45}>
          <div className="card">
            <img
              src={item.img}
              className="card-img-top"
              alt="..."
              style={{ width: 300, height: 200 }}
            />
            <div className="card-body">
              <p className="card-text" style={{ width: 250 }}>
                {item.descr}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { arr } = this.state;
    const items = this.renderArendItems(arr);

    return (
      <>
        <div className="arenda_bg">
          <div className="container">
            <div className="row">
              <h1 className="display-3 text-light">Аренда оборудования</h1>
            </div>
          </div>
        </div>
        <section className="section_wrapper">
          <div className="container">
            <div className="main_wrapper">
              <div className="text_about_wrapper">
                <h2 className="display-6">
                  Наша компания предоставляет услуги аренды профессионального
                  оборудования, мебели и посуды для кейтеринга в городе Сочи.
                  Аренда мебели и оборудования позволит с комфортом провести
                  мероприятие любого уровня.
                </h2>
                <br />
              </div>
              <div className="main_items">
                <div className="d-block">
                  <div className="row justify-content-between">{items}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
