import React, { useState } from "react";
import { Form, Button, InputGroup, Col } from "react-bootstrap";

import "./contacts.css";

export default function Contacts() {
  //использована форма из Reactstrap

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="menu_bg">
        <div className="container">
          <div className="row">
            <h1 className="display-3 text-light">Контакты</h1>
          </div>
        </div>
      </div>

      <section className="container">
        <div className="row justify-content-between">
          <div className="col">
            <div className="wrapper_left_contacts">
              <div className="wrapper_top">
                <div className="title_">
                  <h5 className="display-5 font-weight-light">
                    <i className="far fa-clock"></i> МЫ РАБОТАЕМ
                  </h5>
                </div>
                <div className="work_time">
                  <p>
                    <strong>Понедельник-Пятница:</strong> с 9.00 до 21.00
                    <br />
                    <strong>Выходные:</strong> с 10.00 до 22.00
                  </p>
                </div>
              </div>
              <div className="wrapper_bottom">
                <div className="title_">
                  <h5 className="display-5 font-weight-light">
                    <i className="fas fa-home"></i> НАШ АДРЕС
                  </h5>
                </div>
                <div className="work_adress">
                  <p>Краснодарский край г. Сочи, пер. Морской, д. 12, пом. 1</p>
                  <p>
                    <strong>Телефон:</strong> +7 (938) 444-05-45
                  </p>
                  <p>
                    <strong>Выходные:</strong>
                    <a href="mailto:mail@cateringsochi.com">
                      mail@cateringsochi.com
                    </a>
                  </p>

                  <p>
                    <strong>Соц. сети:</strong>
                    <i className="fab fa-instagram fa-2x social"></i>
                    <i className="fab fa-vk fa-2x social"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col right">
            <div className="wrapper_right">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Ваше имя</Form.Label>
                    <Form.Control required type="text" placeholder="Имя" />
                    <Form.Control.Feedback>Отлично!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Телефон</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          + 7
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="number"
                        placeholder="900-990-99-00"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Пожалуйста, проверьте ввод
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Тема</Form.Label>
                    <Form.Control type="text" placeholder="Тема" required />
                    <Form.Control.Feedback type="invalid">
                      Пожалуйста, введите тему
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="8" controlId="validationCustom04">
                    <Form.Label>Ваше сообщение</Form.Label>
                    <Form.Control type="text" as="textarea" rows={3} />
                    <Form.Control.Feedback type="invalid">
                      Пожалуйста, введите тему
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Check
                    required
                    label="Согласны на обработку персональных данных"
                    feedback="Сначала Вы должны принять нашу политику конфиденциальности"
                  />
                </Form.Group>
                <Button type="submit">Отправить</Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
