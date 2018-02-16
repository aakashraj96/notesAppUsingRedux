import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import H2Text from '../H2Text/H2Text.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <H2Text text={this.props.text} />
      </header>
    );
  }
}
