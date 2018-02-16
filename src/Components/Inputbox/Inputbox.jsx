import React from 'react';
import './Inputbox.css';

export default class Inputbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('rerendering text box');
    return (
      <input
        className="inputStyle"
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        onChange={(event) => {
        this.props.updateTitle(event.target.value);
      }}
        value={this.props.currentTitle}
      />
    );
  }
}
