import React from 'react';
import { Container, Navbar } from 'reactstrap';
import NavButton from './NavButton.js';
import './navigation.scss';

export default () =>
  <Navbar expand="sm">
    <Container>
      <NavButton to="/" className="flex-fill text-center">Home</NavButton>
      <NavButton to="/projects" className="flex-fill text-center">Projects</NavButton>
      <NavButton to="/about" className="flex-fill text-center">About</NavButton>
    </Container>
  </Navbar>