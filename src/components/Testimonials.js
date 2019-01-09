import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import Padding from './Padding/Padding';
import './testimonials.scss';
import Resus from '../assets/resus.jpg';

function Testimonial(){
    return(
        <div>
            <h4>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</h4>
            <img src={Resus} className="rounded-circle" width="80" alt="" style={{margin: '30px 5px'}}></img>
            <h6 style={{color: '#666666'}}>Some important person / Big Shot / BIG</h6>
        </div>
    )
}

function Testimonials(props) {
    return (
    <Row className="testimonials">
        <Col sm="12">
            <Padding factor={4}>
                <Testimonial />
                <p> ** Controls for carousel/slider... ** </p>
            </Padding>
        </Col>
    </Row>
    )
}

export default Testimonials;