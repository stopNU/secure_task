import React, {Component} from 'react';
import { Row, Col, Collapse, Card, CardBody, Button } from 'reactstrap';
import Padding from './Padding/Padding';
import { Player, BigPlayButton  } from 'video-react';
import './caq.scss';
import { FaRegTimesCircle, FaPlusCircle } from 'react-icons/fa';

class Caq extends Component {
    constructor(props) {
      super(props);
      //this.toggle = this.toggle.bind(this);
        this.state = { 
          first: false,
          second: false,
          third: false,
        };
    }
  
    toggle = (name) => () => {
        console.log(name);
      this.setState({ [name]: !this.state[name] });
    }

    render() {
        return (
            <Row>
                <Col xs="12" md="7">
                    <Player
                        playsInline
                        fluid={true}
                        src="https://www.youtube.com/watch?v=6hH8rxarVG8"
                    >
                        <BigPlayButton position="center" />
                    </Player>
                </Col>
                <Col xs="12" md="5">
                    <Padding factor={2}>
                        <h5>Commonly Asked Questions</h5>
                        <div>
                            <button className="read-more-btn" onClick={this.toggle('first')}>
                                {!this.state.first && <FaPlusCircle/>}
                                {this.state.first && <FaRegTimesCircle/>} 
                                <p style={{display:'inline', marginLeft: '10px'}}>Something interesting.</p>
                            </button>
                            <Collapse isOpen={this.state.first}>
                                <p>Tesla is controlling the world?!</p>
                            </Collapse>
                        </div>
                        <div>
                            <button className="read-more-btn" onClick={this.toggle('second')}>
                                {!this.state.second && <FaPlusCircle/>}
                                {this.state.second && <FaRegTimesCircle/>} 
                                <p style={{display:'inline', marginLeft: '10px'}}>Something very interesting.</p>
                            </button>
                            <Collapse isOpen={this.state.second}>
                                <p>aa asda sda sdas das dasd asda</p>
                            </Collapse>
                        </div>
                        <div>
                            <button className="read-more-btn" onClick={this.toggle('third')}>
                                {!this.state.third && <FaPlusCircle style={{marginTop: '-4px'}}/>}
                                {this.state.third && <FaRegTimesCircle style={{marginTop: '-4px'}} />} 
                                <p style={{display:'inline', marginLeft: '10px'}}>Something extremely interesting.</p>
                            </button>
                            <Collapse isOpen={this.state.third}>
                                <p>asdasdas das dasd asd asd as</p>
                            </Collapse>
                        </div>
                    </Padding>
                </Col>
            </Row>
        )
    }
}

export default Caq;

