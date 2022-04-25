import * as React from "react"
import {Container, Row, Col} from "react-bootstrap"
import { FooterWrapper } from "./Footer.styles"

const Footer = () =>{
    return(
        <FooterWrapper>
        <div className="page-footer font-small blue">
        <Container>
                <Row>
                    <Col lg={3} md={3} sm={6} xs={12}>
                    <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={12}>
                    <h5 className="text-uppercase">Support</h5>
                        <ul className="list-unstyled">
                            <li><a href="">+353 80000000</a></li>
                            <li><a href="">support@carrental.com</a></li>
                        </ul>
                    </Col>

                    <Col lg={3} md={3} sm={6} xs={12}>
                        <h5 className="text-uppercase">Address</h5>
                        <ul className="list-unstyled">
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                           
                        </ul>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12}>
                    <h5 className="text-uppercase">Follow Us</h5>
                        <ul className="list-unstyled">
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        <div className="footer-copyright text-center">
            <p> Copyright © 2022 CARRENTAL | Powered by Sruthy</p>
        </div>

        </div>
</FooterWrapper>

    )
}
export default Footer;