import React from 'react';
import './navbutton.scss';

export default ({ children }) =>
  <button className="flex-fill text-center nav-button">
    {children}
  </button>