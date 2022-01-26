import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./img/logo.svg";
import "./login.scss";
const Login = () => {
  return (
    <div>
      <div className="login-main-area-wrap">
        <div className="login-inner-wrap">
          <div className="login-logo">
            <img src={logo} alt="" />
            <p>Login to your Clever Messenger account</p>

            <div className="login-form-btn-hhcbhjfdaldif">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
