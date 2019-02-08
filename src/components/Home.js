import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import './home.scss';

export default () =>
  <Container>
    <Fade duration={1500} delay={1000}>
      <Row>
        <Col className="text-right col-border-right" sm={6}>
          <h4 className="display-4">
            Hi!
          </h4>
          <Fade right delay={1000}>
            <p className="lead">
              I'm Aaron Dosser.
            </p>
            <p className="lead">
              I like to build and design websites.
            </p>
            <p className="lead">
              I also like to make music.
            </p>
            <p className="lead">
              Programming is my passion.
            </p>
          </Fade>
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col sm={6} className="col-border-left">
          <h4 className="display-4">
            What is this?
          </h4>
          <Fade left delay={1500}>
            <p className="lead">
              This is my portfolio and personal website.
            </p>
            <p className="lead">
              In other words, it's a place for me to experiment
              with new ideas and apply them as I learn.
            </p>
            <p className="lead">
              Hopefully, it catches the eye of employers and curious
              onlookers alike.
            </p>
          </Fade>
        </Col>
      </Row>
    </Fade>
  </Container>