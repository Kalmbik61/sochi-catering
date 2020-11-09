import React from "react";

import "./about.css";

const About = () => {
  return (
    <section className="bg_wrapper">
      <div className="container">
        <div className="wrapper_text">
          <div className="jumbotron text-center">
            <h2 className="display-4">ДЕПАРТАМЕНТ ГОСТЕПРИИМСТВА</h2>
            <p style={{ marginTop: 30 + "px" }}>
              Наша команда готова предоставить услуги кейтеринга для мероприятий
              любого формата и масштаба. Мы рады учесть ваши пожелания и
              предложить вам оригинальное сопровождение корпоративных
              презентаций, вечеринок, торжеств по случаю дня рождения, свадьбы и
              любой другой памятной даты.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
