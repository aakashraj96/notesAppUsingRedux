import React from 'react';
import './CreateNote.css';

export default class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.createNote = this.createNote.bind(this);
  }
  createNote() {
    this.props.windowChange();
  }
  render() {
    return (
      <button className="bottomButton" onClick={this.createNote}><h2>Create New Note</h2></button>
    );
  }
}
