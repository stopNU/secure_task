import React from 'react';
import { Row, Col, Form, Label, Input, FormGroup, Button } from 'reactstrap';
import Padding from './Padding/Padding';
import './contact.scss';
import { FaPhone } from 'react-icons/fa';


function Contact(props) {
    return (
    <Row className="contact">
        <Col xs="12" md="4">
            <Padding factor={4}>
                <h2 className="text-line-left" style={{borderColor: '#7b7b7b'}}>Contact us</h2>
                <h4>Quis autem vel eum molestiae consequatur,  eum fugiat quo voluptas nulla pariatur?</h4>
                <br/>
                <h6 className="list-title">Headquarters</h6>
                <ul>
                    <li>123 W. Mission Blvd.</li>
                    <li>Mircale, Austin</li>
                    <li>Gods own country</li>
                </ul>
                <h6 className="list-title">Get in touch</h6>
                <ul>
                    <li><FaPhone/> 213-213-1112</li>
                    <li><FaPhone/> BuddhaID</li>
                    <li><FaPhone/> bestemailintheworld@domain.com</li>
                </ul>
           </Padding>
        </Col>
        <Col xs="12" md="8">
            <Padding factor={4}>
            <Form style={{fontSize: '14px'}}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="fullName">Full Name</Label>
                            <Input type="text" name="fullName" id="fullName" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="budget">What's your budget?</Label>
                            <Input type="text" name="budget" id="budget" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="sevices">Services you're inquirin about</Label>
                            <Input type="text" name="services" id="services" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleText">Tell us about your project</Label>
                    <Input type="textarea" name="text" id="exampleText" rows="6"/>
                </FormGroup>
                <Button className="button" style={{background: '#292929'}}>Send message</Button>
            </Form>
            </Padding>
        </Col>
        
    </Row>
    )
}

export default Contact;