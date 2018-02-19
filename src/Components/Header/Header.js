import React from 'react';
import './Header.css';
import H2Text from '../H2Text/H2Text';

export default props => (
  <header>
    <H2Text text={props.text} />
  </header>
);
