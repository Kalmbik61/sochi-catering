import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./header.css";
import logo from "../../img/logo2.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          style={{ height: 70 + "px" }}
        >
          <Navbar.Brand href="/">
            <img src={logo} className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="row justify-content-center"
            id="responsive-navbar-nav"
            style={{ backgroundColor: "white" }}
          >
            <Link to="/" className="nav_links">
              Главная
            </Link>
            <Link to="/catering-sochi/" className="nav_links">
              Услуги кейтеринга
            </Link>
            <Link to="/arenda/" className="nav_links">
              Аренда оборудования
            </Link>
            <Link to="/menu/" className="nav_links">
              Меню
            </Link>
            <Link to="/contacts/" className="nav_links">
              Контакты
            </Link>
            <Link to="/cart/" className="nav_links">
              <i className="fas fa-shopping-cart"></i>
              (0)
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
