import React from 'react';
import './Inputbox.css';

export default class Inputbox extends React.Component {
  render() {
    return (
      <input className="inputStyle" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} />
    );
  }
}
