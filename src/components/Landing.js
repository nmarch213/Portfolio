import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import RestartingTypist from './RestartingTypist';

class Landing extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Container className="landing-container">
              <h1>Nicholas March</h1>
              <RestartingTypist className="typist-landing text-center">
                <span>Web Developer</span>
                <br />
                <span>Twitch Streamer</span>
                <br />
                <span>Referee of the Sports</span>
                <br />
                <span>Dog Lover</span>
              </RestartingTypist>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Landing;
