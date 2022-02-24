import React, { useState } from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import { Modal } from "react-responsive-modal";
import "../home.scss";
import flagicon from "../img/flag.png";
import messangerIcon from "../img/messenger-icon.svg";
const Hero = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <div className="hero-main-area-wrap">
        {/* <h1> Clever Messenger</h1> */}
        <button onClick={onOpenModal} className="btn btn-primary">
          + Create Bot
        </button>
        <Modal open={open} onClose={onCloseModal} center>
          <div className="create-bot-popup-wrap">
            <Card>
              <Card.Header>
                {" "}
                <p>Continue by logging in</p>
              </Card.Header>
              <Card.Body className="text-center">
                <Card.Text>Login with Facebook</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Modal>
        <div className="home-bot-massanger-item">
          <Row>
            <Col lg={4}>
              <div className="">
                <Card className="main-chat-bot-wrap-jkhdhbsd">
                  <Card.Header className="bot-messanger-settings">
                    <p>Cleverbot Developer</p>
                    <div className="jidugfsdygfd">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          <i className="icon-cog"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Card.Header>
                  <Card.Body className="jdfihfdufhd">
                    <div className="uidhfughydsf">
                      <div className="kuyddfsdyg">
                        <img src={flagicon} alt="" />
                      </div>
                      <div className="kuyddfsdyg">
                        <h6>Cleverbot Developer</h6>
                        <p>Serbisyo ng Business</p>
                      </div>
                    </div>
                    <div className="uihyfsdufb">
                      <img src={messangerIcon} alt="" />
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <div className="row">
                      <Col lg={6}>
                        <div className="jkhfhdfv">
                          <p>Total Subscribers</p>
                          <h6>0</h6>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="jkhfhdfv">
                          <p>Active Subscribers</p>
                          <h6>0</h6>
                        </div>
                      </Col>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Hero;
