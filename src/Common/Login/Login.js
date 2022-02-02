import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./img/logo.svg";
import "./login.scss";
const Login = () => {
  // let history = useHistory();
  const [loginErr, setloginErr] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:4200/v1/auth/login`, user)
      .then(function (response) {
        console.log(response);
        // history.push("/bangladesh");
      })
      .catch(function (error) {
        const errorMass = error.response.data;
        console.log(errorMass);
        setloginErr(errorMass);
      });
    // history.push("/");
  };
  console.log(loginErr);
  return (
    <div>
      <div className="login-main-area-wrap">
        <div className="login-inner-wrap">
          <div className="login-logo">
            <img src={logo} alt="" />
            <p>Login to your Clever Messenger account</p>

            <div className="login-form-btn-hhcbhjfdaldif">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
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

export default Login;