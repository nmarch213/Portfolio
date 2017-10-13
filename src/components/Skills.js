import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import DeviconList from './DeviconList';

import languages from '../deviconLists/languages';
import frameworks from '../deviconLists/frameworks';
import tools from '../deviconLists/tools';

class Skills extends Component {
  render() {
    return (
      <Container>
        <h1>Skills</h1>
        <hr />
        <Row>
          <DeviconList array={languages} arrayName="Languages" />
          <DeviconList array={frameworks} arrayName="Frameworks" />
        </Row>
        <hr />
        <Row>
          <DeviconList array={tools} arrayName="Tools" />
        </Row>
      </Container>
    );
  }
}

export default Skills;
