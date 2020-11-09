import React, { Component } from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";

import "./menu.css";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  componentDidMount() {
    const res = this.props.getMenu();
    this.setState({
      res,
    });
  }
  renderMenu = () => {
    if (!this.state) {
      return;
    }
    const { res } = this.state;
    // console.log(res);
    return res.map((item) => {
      return (
        <div key={item.id} className="col-sm-3 card_wrapper ">
          <div className="card border-0">
            <OverlayTrigger
              trigger="click"
              placement="top"
              overlay={this.popover()}
            >
              <Button
                variant="primary"
                className="hover"
                onClick={() => this.props.onItemSelected(item.id)}
              >
                <i className="fas fa-shopping-cart" />
                Добавить
              </Button>
            </OverlayTrigger>

            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{item.descr}</p>
              <p className="card-text text-muted">{item.price} RUB</p>
            </div>
          </div>
        </div>
      );
    });
  };

  popover = () => {
    return (
      <Popover id="popover-basic">
        <Popover.Content>Добавлено в корзину</Popover.Content>
      </Popover>
    );
  };

  render() {
    const renderMenuList = this.renderMenu();
    return (
      <>
        <div className="menu_bg">
          <div className="container">
            <div className="row">
              <h1 className="display-3 text-light">Меню</h1>
            </div>
          </div>
        </div>

        <section className="menu_wrapper">
          <div className="container">
            <div className="row justify-content-between">{renderMenuList}</div>
          </div>
        </section>
      </>
    );
  }
}
