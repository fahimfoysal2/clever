import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Common/Header/Header";
import Hero from "./Hero/Hero";
import "./home.scss";
const Home = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <Hero />
      </Container>
    </div>
  );
};

export default Home;
