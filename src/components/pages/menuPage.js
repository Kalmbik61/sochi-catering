import React, { Component } from "react";
import Menu from "../menu/menu";

import MenuList from "../../services/service";

export default class MenuPage extends Component {
  state = {
    selectedItem: 0,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  menu = new MenuList();

  render() {
    console.log(this.state);
    return (
      <>
        <Menu
          getMenu={this.menu.getMenu}
          onItemSelected={this.onItemSelected}
        />
      </>
    );
  }
}
