import React from 'react';
import './Field.css';


export default class Field1 extends React.Component {
  render() {
    return (
      <div className="field">
        {this.props.children}
      </div>
    );
  }
}
