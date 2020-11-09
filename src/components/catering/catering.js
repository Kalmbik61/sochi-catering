import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./catering.css";
import cat1 from "../../img/cat1.jpg";
import cat2 from "../../img/cat2.jpeg";
import cat3 from "../../img/cat3.jpg";
import cat4 from "../../img/cat5.jpg";
import cat5 from "../../img/cat6.jpg";
import cat6 from "../../img/cat7.jpg";
import cat7 from "../../img/cat4.jpg";
import cat8 from "../../img/cat8.jpg";
import cat9 from "../../img/cat9.jpg";
import cat10 from "../../img/cat10.jpg";
import cat11 from "../../img/cat11.jpg";
import cat12 from "../../img/cat12.jpg";

export default class Catering extends Component {
  state = {
    array: [
      {
        img: [cat1, cat2, cat3],
        id: 1,
        head: "Кейтеринг в Сочи",
        text:
          "Мы предлагаем Вам окунуться в настоящее искусство выездного обслуживания – высокое качество еды и напитков в сочетании с изысканной сервировкой, эффектным оформлением. Наша творческая команда сделает Ваше событие незабываемым! С большим вниманием наша команда профессионалов относится даже к мелким деталям, чтобы Ваше мероприятие запомнилось Вам только приятными моментами. За последние 6 лет мы провели более 100 мероприятий различного формата: от кофе-брейков до галла-ужинов на открытых площадках. Будем рады видеть Вас в рядах наших клиентов.",
      },
      {
        img: [cat4, cat5, cat6],
        id: 2,
        head: "Кофе-брейк",
        text:
          "В Сочи в течении года проходит более 250 мероприятий такого плана, как конференции, форумы, саммиты. Обязательная и весьма важная часть программы на конференциях, семинарах, длительных переговорах и совещаниях. Учитывая формат и тайминг Вашего события, наша команда составит для Вас меню закусок, десертов, горячих и прохладительных напитков.Наша творческая команда сделает Ваше событие незабываемым!",
      },
      {
        img: [cat7, cat8, cat9],
        id: 3,
        head: "Фуршет",
        text:
          "Фуршет является наиболее востребованным форматом мероприятий в сфере общепита в городе Сочи. Современные мероприятия обычно проходят в достаточно динамичной форме, и грамотно проведенный фуршет отлично вписывается в данную концепцию. Наша компания организует для Вас мероприятия под ключ: поможет подобрать оптимальное меню, обеспечит современным оборудованием для кейтеринга, подберет профессиональны",
      },
      {
        img: [cat10, cat11, cat12],
        id: 4,
        head: "Выездной бар",
        text:
          "Праздник к Вам приходит … Относительно новый формат, но стремительно набирающий обороты. Наша компания начала своей существование именно с формата алкогольный и безалкогольных баров. В данный момент в минимальный заказ входит приготовлении 100 коктейлей (по ранее разработанной для Вас котельной карте), которые могут быть приготовлены как у Вас дома, так и формате составной части event-мероприятия.",
      },
    ],
  };

  renderItems = (arr) => {
    return arr.map((item) => {
      const imges = item.img.map((img) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 img_catering"
              src={img}
              alt="slides"
              style={{ width: 400, height: 300 }}
            />
          </Carousel.Item>
        );
      });
      return (
        <div
          key={item.id}
          className="row justify-content-around catering_wrapper"
        >
          <div className="catering_text_wrapper col">
            <h2 className="display-5">{item.head}</h2>
            <p>{item.text}</p>
          </div>
          <div className="catering_img_wrapper col">
            <Carousel> {imges}</Carousel>
          </div>
        </div>
      );
    });
  };

  render() {
    const { array } = this.state;
    const items = this.renderItems(array);
    return (
      <>
        <div className="header_bg">
          <div className="container">
            <div className="row text-light">
              <h1 className="display-3">Услуги кейтеринга</h1>
            </div>
          </div>
        </div>

        <section className="main_content">
          <div className="container">
            <div className="content">{items}</div>
          </div>
        </section>
      </>
    );
  }
}
