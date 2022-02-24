import { Line } from "rc-progress";
import React from "react";
import { Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import Header from "../Common/Header/Header";
import AddClients from "./AddClients";
import "./agency.scss";
import AgencyDataTable from "./AgencyDataTable";
import AvailableSubscribers from "./AvailableSubscribers";
import ClientsLi from "./ClientsLi";
import EditProfile from "./EditProfile";
import logo from "./img/2-logo.png";
const Agency = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <div className="agency-main-content-wrap">
          <Row>
            <Col lg={4}>
              <div className="agency-single-item">
                <div className="uihdfbfv">
                  <img src={logo} alt="" />
                </div>
                <div className="uihdfbfv">
                  <h3>My New Agency</h3>
                  <p>My agency address</p>
                  <EditProfile />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="agency-single-item-gdfgf">
                <div className="uhdscyubchxcb-body">
                  <div className="juhfnhcc">
                    <p>Client licences</p>
                  </div>
                  <div className="juhfnhcc">
                    <ClientsLi />
                  </div>
                </div>
                <div className="agency-item-body">
                  <h5>Agency client licences used</h5>
                  <Line percent="70" strokeWidth=".7" strokeColor="#0d6efd" />
                  <p>1 of 5 licenses used</p>
                </div>
              </div>
            </Col>{" "}
            <Col lg={4}>
              <div className="agency-single-item-gdfgf">
                <div className="uhdscyubchxcb-body">
                  <div className="juhfnhcc">
                    <p>Available Subscribers</p>
                  </div>
                  <AvailableSubscribers />
                </div>
                <div className="agency-item-body">
                  <h5>Agency client licences used</h5>
                  <Line percent="70" strokeWidth=".7" strokeColor="#0d6efd" />
                  <p>1 of 5 licenses used</p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="view-all-clients-list-table-wrap">
            <div className="table-top-header-area">
              <div className="jkdvjhbv-left">
                <AddClients />
              </div>
              <div className="jkdvjhbv-right">
                <div className="gfvbff">
                  <Form>
                    <Form.Select>
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                      <option>100</option>
                    </Form.Select>
                  </Form>
                </div>
                <div className="gfvbff">
                  <Form.Group className="" controlId="">
                    <Form.Control type="search" placeholder="search...." />
                  </Form.Group>
                </div>
                <div className="gfvbff">
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      Bulk Actions
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1"> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="table-agency-data-main-wrap">
              <AgencyDataTable />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Agency;
