import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'reactstrap';
import './header.scss';

export default () =>
  <Container>
    <Fade left>
      <h1 className="display-1 logo">
        <strong>Aaron Dosser</strong>
      </h1>
    </Fade>
    <Fade right>
      <h5 className="display-5 sub-logo">
        Web Programmer
      </h5>
    </Fade>
  </Container>