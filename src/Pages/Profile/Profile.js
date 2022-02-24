import { Line } from "rc-progress";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../Common/Header/Header";
import "./Profile.scss";
const Profile = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <div className="">
          <Row>
            <Col lg={6}>
              <div className="profile-left-content">
                <div className="profile-left-header">
                  <h6>Edit Profile</h6>
                </div>
                <div className="profile-left-body">
                  <Form>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>Email Address:</Form.Label>
                      <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>Confirm password:</Form.Label>
                      <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>Street Address:</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>Postal Code:</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>Country</Form.Label>
                      <Form.Select type="text" placeholder="">
                        <option value=""></option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>State</Form.Label>
                      <Form.Select type="text" placeholder="">
                        <option value=""></option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label>T-shirt Size</Form.Label>
                      <Form.Select type="text" placeholder="">
                        <option value=""></option>
                      </Form.Select>
                    </Form.Group>{" "}
                    <Form.Group
                      className="mb-3 form-group-profile"
                      controlId=""
                    >
                      <Form.Label></Form.Label>
                      <Button>Save</Button>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="profile-left-content mb-3">
                <div className="profile-left-header">
                  <h6>Current Subscribers</h6>
                </div>
                <div className="profile-left-body">
                  <div className="">
                    <div className="agency-item-body">
                      <p>1 of 5 licenses used</p>
                      <Line
                        percent="70"
                        strokeWidth=".7"
                        strokeColor="#0d6efd"
                      />
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="profile-left-content mb-3">
                <div className="profile-left-header">
                  <h6>Current Subscribers</h6>
                </div>
                <div className="profile-left-body">
                  <div className="">
                    <div className="agency-item-body">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="pastword"
                          placeholder="Enter email"
                        />
                        {/* <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text> */}
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="profile-left-content mb-3">
                <div className="profile-left-header">
                  <h6>Data Processing Agreement (for EU GDPR)</h6>
                </div>
                <div className="profile-left-body">
                  <div className="">
                    <div className="agency-item-body">
                      <p>
                        In accordance with the EU General Data Protection
                        Regulation (GDPR), you are required to have a Data
                        Processing Agreement (DPA) with Clever Messenger.
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
