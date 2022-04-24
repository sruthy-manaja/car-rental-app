import * as React from "react"
import {Container, Row} from "react-bootstrap"
import { FooterWrapper } from "./Footer.styles"

const Footer = () =>{
    return(
        <FooterWrapper>
        <div className="page-footer font-small blue pt-4">
            <Container>
                <Row>
                    <div className="col-md-3 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Support</h5>
                        <ul className="list-unstyled">
                            <li><a href="">+353 80000000</a></li>
                            <li><a href="">support@carrental.com</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Address</h5>
                        <ul className="list-unstyled">
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                           
                        </ul>
                    </div>
                    <div className="col-md-3 mt-md-0 mt-3 app-icon">
                    <h5 className="text-uppercase">Follow Us</h5>
                        <ul className="list-unstyled follow-us-list">
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
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