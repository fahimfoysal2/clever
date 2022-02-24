import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "./img/logo.svg";
const Header = () => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div className="header-main-area-wrap">
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <>
            <Navbar.Brand href="#home">
              {" "}
              <img src={logo} alt="" className="main-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link to="/agency" className="nav-link">
                  <i className="icon-apartment"></i>
                  Agency
                </Link>
                <Link to="/" className="nav-link">
                  <i className="icon-home2"></i>
                  Home
                </Link>{" "}
                <Dropdown className="dropdown-header-navbar">
                  <Dropdown.Toggle id="dropdown-basic">
                    <i className="icon-user"></i>
                    Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-view-header">
                    <Link to="/profile" className="nav-link">
                      Profile
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
                <p onClick={handleLogout} className="nav-link mb-0">
                  <i className="icon-exit-right"></i>
                  Logout
                </p>
              </Nav>
            </Navbar.Collapse>
          </>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
