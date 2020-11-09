import React, { Component } from "react";

import "./cart.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    return (
      <>
        <div className="cart_bg">
          <div className="container">
            <div className="row">
              <h1 className="display-3 text-light">Корзина</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="cart_wrapper">
            <table className="table text-center table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Товар</th>
                  <th scope="col" className="none_item">
                    Цена
                  </th>
                  <th scope="col" className="none_item">
                    Количество
                  </th>
                  <th scope="col">Итого</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="font-italic">Салат из морепродуктов</p>
                  </td>
                  <td className="font-weight-lighter none_item">1200 RUB</td>
                  <td className="none_item">
                    <input
                      style={{ textAlign: "center", border: "none" }}
                      type="number"
                      defaultValue="1"
                    />
                  </td>
                  <td className="font-weight-bold">1200 RUB</td>
                </tr>
                <tr>
                  <td>
                    <p className="font-italic">Салат из морепродуктов</p>
                  </td>
                  <td className="font-weight-lighter none_item">1200 RUB</td>
                  <td className="none_item">
                    <input
                      style={{ textAlign: "center", border: "none" }}
                      type="number"
                      defaultValue="1"
                    />
                  </td>
                  <td className="font-weight-bold">1200 RUB</td>
                </tr>
                <tr>
                  <td>
                    <p className="font-italic">Салат из морепродуктов</p>
                  </td>
                  <td className="font-weight-lighter none_item">1200 RUB</td>
                  <td className="none_item">
                    <input
                      style={{ textAlign: "center", border: "none" }}
                      type="number"
                      defaultValue="1"
                    />
                  </td>
                  <td className="font-weight-bold">1200 RUB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
