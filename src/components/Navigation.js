import React from 'react';
import { Container, Navbar } from 'reactstrap';
import NavButton from './NavButton.js';
import './navigation.scss';

export default () =>
  <Navbar expand="sm">
    <Container>
      <NavButton className="flex-fill text-center">Home</NavButton>
      <NavButton className="flex-fill text-center">Projects</NavButton>
      <NavButton className="flex-fill text-center">About</NavButton>
    </Container>
  </Navbar>