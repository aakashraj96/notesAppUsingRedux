import React from 'react';
import './H2Text.css';

export default class H2Text extends React.Component {
  render() {
    return (
      <h2 className="h2class"> {this.props.text} </h2>
    );
  }
}
