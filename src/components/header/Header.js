import React, { useState, useEffect } from "react"
import {Container, Col, Row} from "react-bootstrap"
import Navigation from "../navigation/Navigation"
import { Wrapper } from "./Header.styles"
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {

  const [barVisibility, setBarVisibility] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    position >= 120 ? setBarVisibility(true) : setBarVisibility(false);
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <Wrapper>
      <Navbar  className={barVisibility ? "showBar" : "hideBar"}>
        <Container>
        <Row> 
          <Col lg={3} md={3} sm={6} xs={12}>
            <a href="/" className="logo">
             <h4> Car Rental</h4>
            </a>
          </Col>
          <Col lg={9} md={9} sm={6} xs={6} className="d-none d-lg-block">
            <Navigation/>
          </Col>
        </Row>
        </Container>
        </Navbar>
    </Wrapper>
  )
}

export default Header