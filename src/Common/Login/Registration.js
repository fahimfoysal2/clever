import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "./img/logo.svg";
import "./login.scss";
const Registration = () => {
  const [loginErr, setloginErr] = useState("");
  let history = useHistory();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    // "locale": "",
    // "timezone": "",
    // "timezone_country": "",
    gender: "",
    // "address_street": "",
    // "address_postalcode": "",
    // "address_city": "",
    // "address_state": "",
    // "address_country": ""
  });
  const onInputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:4200/v1/auth/register`, user)
      .then(function (response) {
        // setUser(response);
      })
      .catch(function (error) {
        const errorMass = error.response.data;
        console.log(errorMass);
        setloginErr(errorMass);
      });
    history.push("/");
  };
  console.log(loginErr);
  console.log(user);

  return (
    <div>
      <div className="login-main-area-wrap">
        <div className="login-inner-wrap">
          <div className="login-logo">
            <img src={logo} alt="" />
            <p>Create to your Clever Messenger account</p>

            <div className="login-form-btn-hhcbhjfdaldif">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="first_name">
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="first_name"
                    onChange={(e) => onInputChange(e)}
                  />
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="last_name">
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="last_name"
                    onChange={(e) => onInputChange(e)}
                  />
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="gender">
                  <Form.Select name="gender" onChange={(e) => onInputChange(e)}>
                    <option value="Gender">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>{" "}
                <Form.Group className="mb-3" controlId="emailId">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => onInputChange(e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => onInputChange(e)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
                <Link to="recovery-pass">Forgot password?</Link>
                <p>Clever Messenger © 2022</p>
                <Link to="/registration">
                  Don't got a Clever Messenger account yet?
                </Link>
              </Form>
              <p className="text-dangertyiu">{loginErr?.error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
