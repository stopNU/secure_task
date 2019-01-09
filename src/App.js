import React, { Component } from 'react';
import Padding from './components/Padding/Padding';
import person from './assets/person.png'; 
import Box from './components/Box/Box';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Caq from './components/Caq';
import { Container, Row, Col, Button } from 'reactstrap';
import 'rc-menu/assets/index.css';
import './App.scss';
import phones from './assets/phones.png';
import { FaBeer, FaThumbsUp } from 'react-icons/fa';
import Menu, {SubMenu, MenuItem} from 'rc-menu';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Container fluid={true} className="noPadding">
          <Menu
            mode="horizontal"
            style={{textAlign: 'right'}}
            activeKey="1"
          > 
            <MenuItem key="1">Home</MenuItem>
            <SubMenu key="2" title="About">
              <MenuItem>Lorem</MenuItem>
              <MenuItem>Podom</MenuItem>
              <MenuItem>Clodem</MenuItem>
            </SubMenu>
            <MenuItem key="3">Work</MenuItem>
            <MenuItem key="4">News</MenuItem>
            <MenuItem key="5">Contacts</MenuItem>
          </Menu>
          <Header />
          {/* Speciality section */}
          <Row className="row-eq-height">
            <Col md="12" lg="4">
              <Padding factor={4}>
                <h2 className="black text-line-left">Our Speciality</h2>
                <h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
                <br/><br/>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
              </Padding>
            </Col>
            <Col md="12" lg="8">
              <Row style={{height: '50%'}}>
                <Box 
                  title="Development" 
                  icon={<FaBeer style={{color: '#da491c', fontSize: '24px'}}/>} 
                  desc="Description about something relevant to development." 
                />
                <Box title="UI/UX" icon={<FaBeer style={{color: '#da491c', fontSize: '24px'}}/>} desc="Desc 2" />
                <Box title="Social Marketing" icon={<FaBeer style={{color: '#da491c', fontSize: '24px'}}/>} desc="Desc 2" />
              </Row>
              <Row style={{height: '50%'}}>
                <Box title="System architecture" icon={<FaBeer style={{color: '#da491c', fontSize: '24px'}}/>} desc="Desc 2" />
                <Box title="Copywriting" icon={<FaBeer style={{color: '#da491c', fontSize: '24px'}}/>}  desc="Desc 2"/>
                <Box title="Photographing" icon={<FaBeer style={{color: '#da491c', fontSize: '24px'}}/>}  desc="Desc 2"/>
              </Row>
            </Col>
          </Row>

          {/* Mobile ad section */}
          <Row className="mobile">
            <Col md="12" lg="7">
              <Padding factor={4}>
                <h5 style={{textTransform: "uppercase", fontWeight: '400'}}>Clean & modern design + paralax effect for img.</h5>
                <h3 style={{fontSize: '55px', fontWeight: '400', lineHeight: '0.909', padding: '20px 0'}}>Looks great on mobile devices</h3>
                <Button className="button" style={{background: '#292929', margin: '10px'}}>Contact us</Button>
                <Button className="button" style={{background: '#292929', margin: '10px'}}>Learn more</Button>
              </Padding>
            </Col>
            <Col xs="12" lg="5" className="d-none d-lg-block">
              <img className="phones" alt="" src={phones} />
            </Col>
          </Row>

          {/* CAQ section */}
          <Caq />
          
          {/* Testimonials section */}
          <Testimonials />

          {/* Achievements section */}
          <Row className="achievements">
            <Col xs="12" md="8">
              <Padding factor={4}>
                <h5>Solving problems and keeping clients happy</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Row>
                  <Col xs="6" md="4">
                    <Row>
                      <Col xs="1">
                        <FaThumbsUp size={25} className="orange" />
                      </Col>
                      <Col xs="9" sm="10">
                        <p className="bold highlight">886</p>
                        <p style={{lineHeight: 1}}>Commits</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="6" md="4">
                    <Row>
                      <Col xs="1">
                        <FaThumbsUp size={25} className="orange" />
                      </Col>
                      <Col xs="9" sm="10">
                        <p className="bold highlight">68+</p>
                        <p style={{lineHeight: 1}}>Happy Clients</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="6" md="4">
                    <Row>
                        <Col xs="1">
                          <FaThumbsUp size={25} className="orange" />
                        </Col>
                        <Col xs="9" sm="10">
                          <p className="bold highlight">335</p>
                          <p style={{lineHeight: 1}}>Bugs Fixed</p>
                        </Col>
                      </Row>
                  </Col>
                </Row>
              </Padding>
            </Col>
            <Col xs="12" md="4">
              <img className="person img-fluid" alt="" src={person} />
            </Col>
          </Row>

          {/* Map section */}
          <Row style={{borderBottom: "1px solid #e6e6e6"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.2210300594106!2d23.33133921578423!3d42.63547397916931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa840652897535%3A0xaed85da965e986e6!2sSecure+Group+Lab!5e0!3m2!1sen!2sdk!4v1547032786517" 
              width="100%" 
              height="450" 
              frameBorder="0" 
              allowFullScreen>
            </iframe>
          </Row>

          {/* Contact section */}
          <Contact />

          {/* Footer section */}
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;