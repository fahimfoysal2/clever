import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as usertz from "user-timezone";
import { CountryList } from "../CountryList";
import logo from "./img/logo.svg";
import "./login.scss";
const Registration = () => {
  const timezone11 = usertz.getTimeZone();
  console.log(timezone11);
  const [loginErr, setloginErr] = useState([]);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    locale: "",
    timezone: timezone11,
    timezone_country: "",
    gender: "",
    address_street: "",
    address_postalcode: "",
    address_city: "",
    address_state: "",
    address_country: "",
  });
  const onInputChange = (e, index) => {
    const oldValues = { ...user };
    oldValues[e.target.name] = e.target.value;

    if (e.target.name === "timezone_country") {
      const selectedCountry = CountryList.find(
        (country) => country.name.common === e.target.value
      );
      const language = Object.values(selectedCountry.languages)[0];
      oldValues.locale = language;
      console.log(selectedCountry, language);
    }
    setUser(oldValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:3000/v1/auth/register`, user)
      .then(function (response) {
        setUser(response);
      })
      .catch(function (error) {
        const errorMass = error.response.data;
        console.log(errorMass);
        setloginErr(errorMass);
      });
  };
  console.log(user);
  return (
    <div>
      <div className="login-main-area-wrap registration">
        <div className="login-inner-wrap">
          <div className="login-logo">
            <img src={logo} alt="" />
            <p>Create to your Clever Messenger account</p>
            {/* {detectBrowserLanguage} */}
            <div className="login-form-btn-hhcbhjfdaldif text-start">
              <p className="text-dangertyiu">{loginErr?.error}</p>
              <p className="text-dangertyiu">{loginErr?.message}</p>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="first_name">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        name="first_name"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>{" "}
                  </Col>
                  {/* ========================== */}
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="last_name">
                      {" "}
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        name="last_name"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>{" "}
                  </Col>
                  {/* ========================== */}
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="emailId">
                      {" "}
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="gender">
                      {" "}
                      <Form.Label>Gender</Form.Label>
                      <Form.Select
                        name="gender"
                        required
                        onChange={(e) => onInputChange(e)}
                      >
                        <option value="Gender">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                    </Form.Group>{" "}
                  </Col>{" "}
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="gender">
                      {" "}
                      <Form.Label>country</Form.Label>
                      <Form.Select
                        name="timezone_country"
                        required
                        onChange={(e, index) => onInputChange(e, index)}
                      >
                        {CountryList.map((item, i) => {
                          return (
                            <option key={i} value={item.name.common}>
                              {/* {i + 1} */}
                              {/* {console.log(item)} */}
                              {item.name.common}
                            </option>
                          );
                        })}

                        <option value="Gender">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="address_street">
                      {" "}
                      <Form.Label>Street</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Street Address"
                        name="address_street"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="address_postalcode">
                      {" "}
                      <Form.Label>Postal code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter postalcode"
                        name="address_postalcode"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="address_city">
                      {" "}
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter city"
                        name="address_city"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="address_state">
                      {" "}
                      <Form.Label>State</Form.Label>{" "}
                      <Form.Control
                        type="text"
                        placeholder="Enter state"
                        name="address_state"
                        required
                        onChange={(e) => onInputChange(e)}
                      />{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="address_country">
                      {" "}
                      <Form.Label>Country</Form.Label>{" "}
                      <Form.Control
                        type="text"
                        placeholder="Enter your country"
                        name="address_country"
                        required
                        onChange={(e) => onInputChange(e)}
                      />{" "}
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      {" "}
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                  </Col>
                </Row>

                <Link to="/recovery-pass">Forgot password?</Link>
                <p>Clever Messenger © 2022</p>
                <Link to="/login">Already have an account?</Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
