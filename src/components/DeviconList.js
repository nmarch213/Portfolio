import React, { Component } from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'reactstrap';

import Devicon from './Devicon';

class DeviconList extends Component {
  renderIcons = array => {
    return _.map(array, icon => (
      <Devicon className={icon.className} name={icon.name} />
    ));
  };

  render() {
    const { array, arrayName } = this.props;
    return (
      <Col>
        <Container className="text-center">
          <h2>{arrayName}</h2>
          <Row>{this.renderIcons(array)}</Row>
        </Container>
      </Col>
    );
  }
}

export default DeviconList;
