import React from 'react';
import './Field4.css';

export default class Field4 extends React.Component {
  constructor() {
    super();
    this.state = {
      characterCount: 0,
      formStyle: {
        backgroundColor: '#FFFFFF',
      },
    };
  }
  render() {
    return (
      <textarea form="notesForm" name="note" style={this.state.formStyle} onKeyPress={() => { this.setState({ backgroundColor: '#FFF000' }); }}>
      Some text inside
      </textarea>
    );
  }
}
