import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

function Header(props) {
    return <Row className="header">
        <Col xs="12" className="noPadding">
            <Jumbotron className="text-center" style={{marginBottom: '0px', padding: '0px', background: 'transparent'}}>
            <div style={{width: '100%'}}>
                <h1>We <span style={{fontWeight: 'bold'}}>love</span> to write code</h1>
                <h6 className="hidden-mobile">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</h6>
            </div>
            </Jumbotron>
        </Col>
    </Row>
}

export default Header;