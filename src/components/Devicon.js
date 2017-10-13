import React, { Component } from 'react';
import { Tooltip, Col } from 'reactstrap';
import 'devicon/devicon.min.css';

class Devicon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipOpen: false
    };
  }

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    const { name, ...props } = this.props;
    return (
      <Col>
        <i {...props} id={name} />
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          toggle={this.toggle}
          target={name}
        >
          {name}
        </Tooltip>
      </Col>
    );
  }
}

export default Devicon;
