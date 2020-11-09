import React from "react";

import "./mainContent.css";

const MainContent = () => {
  return (
    <>
      <div className="main_img"></div>
      <section className="container-fluid">
        <div className="container ">
          <div className="main_wrapper">
            <div className="content_row">
              <div className="cont_wrapper row justify-content-between ">
                <div className="col-sm-4 border_one">
                  <div className="content text-center">
                    <i className="far fa-star fa-2x"></i>
                    <h5>Фуршет</h5>
                    Фуршет от 1000 рублей
                    <p>6 видов холодных закусок, вода, морс</p>
                  </div>
                </div>
                <div className="col-sm-4 border_two">
                  <div className="content text-center">
                    <i className="far fa-star fa-2x"></i>
                    <h5>Коктейльный бар</h5>
                    Бар под ключ от 100 коктейлей.
                    <p>Специальная коктейльная карта для Вашего мероприятия</p>
                  </div>
                </div>
                <div className="col-sm-4 border_one">
                  <div className="content text-center">
                    <i className="far fa-star fa-2x"></i>
                    <h5>Кофе-брейк</h5>
                    Кофе-брейк от 400 рублей на
                    <p>человека. Входит: 2 мини-сэндвича, десерт, чай-кофе</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_row">
              <div className="cont_wrapper row justify-content-between ">
                <div className="col-sm-4 ">
                  <div className="content text-center">
                    <i className="far fa-star fa-2x"></i>
                    <h5>Аренда посуды</h5>
                    Предоставляем посуду в аренду физическим и юридическим лицам
                  </div>
                </div>
                <div className="col-sm-4 border_three">
                  <div className="content text-center">
                    <i className="far fa-star fa-2x"></i>
                    <h5>Банкет</h5>
                    Выбор из более чем 50 блюд нашего меню приятно сопроводит
                    Ваше мероприятие
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="content text-center ">
                    <i className="far fa-star fa-2x"></i>
                    <h5>Аренда оборудования</h5>
                    Предостовляем услуги по аренде проффессионального
                    <p>оборудования для мероприятий любого уровня</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
