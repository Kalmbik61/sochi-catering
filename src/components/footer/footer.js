import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer_wrapper container">
        <div className="d-flex justify-content-between">
          <div className="footer_text col">
            <h5 className="display-6">О компании</h5>
            <p className="text_footer_color">
              Наша команда готова предоставить услуги кейтеринга в Сочи для
              мероприятий любого формата и масштаба.
            </p>
          </div>
          <div className="footer_text col">
            <h5 className="display-6">Дисклеймер</h5>
            <p className="text_footer_color">
              Посещая этот сайт и используя размещенную на нем информацию, вы,
              тем самым, принимаете данные условия использования и{" "}
              <a href="#">
                <span>Далее</span>
              </a>
            </p>
          </div>
          <div className="footer_text col">
            <h5 className="display-6">Наши проекты</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/menu/" className="nav_links">
                  Меню
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/catering-sochi/" className="nav_links">
                  Услуги кейтеринга
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts/" className="nav_links">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text_footer_color">
            {" "}
            © ДЕПАРТАМЕНТ ГОСТЕПРИИМСТВА 2019 г.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
