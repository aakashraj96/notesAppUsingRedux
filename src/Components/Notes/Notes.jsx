import React from 'react';
import './Notes.css';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('rerendering text box');
    const notes = this.props.notesArray.map((note, i) => {
      console.log('Title array',this.props.titleArray[i]);
      return (
        <div key={i}>Title: {this.props.titleArray[i]}<br/>
           Note: {note}</div>
      );
    });
    return (
      <div>
        {notes}
      </div>

    );
  }
}
