import React from 'react';
import { Row, Col, Form, Input } from 'reactstrap';
import Padding from './Padding/Padding';
import './footer.scss';
import { FaFacebookF } from 'react-icons/fa';


function Footer(props) {
    return (
    <Row className="footer">
        <Col xs="12" md="8">
            <Padding factor={4}>
                <ul className="list-inline">
                    <li className="list-inline-item">Our speciality</li>
                    <li className="list-inline-item">Meet our team</li>
                    <li className="list-inline-item">How we do it</li>
                    <li className="list-inline-item">Works</li>
                    <li className="list-inline-item">News & articles</li>
                    <li className="list-inline-item">Contact</li>
                </ul>
                <Form>
                    <Input type="email" className="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">Subscribe duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
</small>
                </Form>
                <br/><br/>
                <p className="copyright">Copyright 2016 | All Rights Reserved</p>
            </Padding>
        </Col>

        <Col xs="12" md="4">
            <Padding factor={4}>
                <h3 style={{fontSize: '26px'}}>Front-end Test</h3>
                <p className="faded">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <ul className="list-inline">
                    <li className="list-inline-item icon"><FaFacebookF size={20}/></li>
                    <li className="list-inline-item icon"><FaFacebookF size={20}/></li>
                    <li className="list-inline-item icon"><FaFacebookF size={20}/></li>
                    <li className="list-inline-item icon"><FaFacebookF size={20}/></li>
                    <li className="list-inline-item icon"><FaFacebookF size={20}/></li>
                    <li className="list-inline-item icon"><FaFacebookF size={20}/></li>
                </ul>
            </Padding>
        </Col>
    </Row>
    )
}

export default Footer;