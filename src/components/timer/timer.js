import React from "react";

import "./timer.css";

const Timer = () => {
  const fonts = {
    fontSize: 100 + "px",
    fontWeight: 100,
  };

  return (
    <section className="bg_wrapper">
      <div className="container t_wrapp">
        <div className="wrapper">
          <div className="time_wrapper">
            <div className="row text-center">
              <div className="time_num col text-light">
                <span style={fonts}>00</span>
                <p>Days</p>
              </div>
              <div className="time_num col text-light">
                <span style={fonts}>00</span>
                <p>Hours</p>
              </div>
              <div className="time_num col text-light">
                <span style={fonts}>00</span>
                <p>Min</p>
              </div>
              <div className="time_num col text-light">
                <span style={fonts}>00</span>
                <p>Sec</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="text">
                <p
                  className="text-light"
                  style={{ fontSize: 18 + "px", fontWeight: 150 }}
                >
                  Действует специальное предложения для свадебных мероприятий.
                  Рады предложить специальные цены для молодоженов и свадебных
                  event-агенств
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="btn_wrapper">
                <button className="btn text-light">
                  Узнать подробнее
                  <i
                    className="fas fa-arrow-right"
                    style={{ marginLeft: 20 + "px" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
