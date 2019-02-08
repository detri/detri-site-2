import React from 'react';
import './navbutton.scss';
import { NavLink } from 'react-router-dom';

export default ({ children, to }) =>
  <NavLink className="flex-fill text-center nav-button" to={to}>
      {children}
  </NavLink>