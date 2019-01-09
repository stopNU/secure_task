import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './Box.scss';
import { FaExpandArrowsAlt } from 'react-icons/fa';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isHovering: false,
        };
    }

    handleMouseEnter = () => {
        this.setState({
            isHovering: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            isHovering: false
        })
    }

    handleClick = () => {
        alert("You clicked on it like a pro!");
    }

    render() {
        return (
            <Col 
                xs="12" 
                md="4" 
                onClick={this.handleClick}
                className="text-center box"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                >
                    <div>
                        {this.props.icon}
                        <h3 style={{marginTop: '.5rem'}}>{this.props.title}</h3>
                        {this.state.isHovering && 
                            <p style={{color: "white", paddingBottom: '10px'}}>{this.props.desc}</p>
                        }
                    </div>
                    {this.state.isHovering && <div className="expand-click">
                        <FaExpandArrowsAlt />
                    </div>}
            </Col>
        )
    }
}

export default Box;