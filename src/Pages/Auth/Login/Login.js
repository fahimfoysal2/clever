import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "react-responsive-modal/styles.css";
import { Link, useHistory } from "react-router-dom";
import logo from "./img/logo.svg";
import "./login.scss";
const Login = () => {
  let history = useHistory();
  const [loginErr, setloginErr] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const url = process.env.REACT_APP_API_URL;
    await axios
      .post(process.env.REACT_APP_API_URL + `auth/login`, user)
      .then(function (response) {
        if (response.statusText === "OK") {
          setTimeout(() => {
            history.push("/");
          }, 1);

          localStorage.setItem(
            "authUser",
            JSON.stringify(response.data.api_key)
          );
        }
      })
      .catch(function (error) {
        const errorMass = error.response.data;
        setloginErr(errorMass);
      });
  };

  return (
    <div>
      <div className="login-main-area-wrap">
        <div className="login-inner-wrap">
          <div className="login-logo">
            <img src={logo} alt="" />
            <p>Login to your Clever Messenger account</p>

            <div className="login-form-btn-hhcbhjfdaldif">
              <div className="text-dangertyiu text-start">
                {loginErr.error ? (
                  <div>
                    <span className="text-dangertyiu">{loginErr.error}</span>
                  </div>
                ) : null}
              </div>
              <div className="text-dangertyiu mb-3 text-start"></div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                  {loginErr.error ? (
                    <div className="text-start">
                      <span className="text-dangertyiu">
                        {loginErr.message}
                      </span>
                    </div>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
              <Link to="recovery-pass">Forgot password?</Link>
              <br />
              <Link to="/registration">
                Don't got a Clever Messenger account yet?
              </Link>
              <p className="mt-3">Clever Messenger © 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
