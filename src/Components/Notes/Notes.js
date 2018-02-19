import React from 'react';
import './Notes.css';
import SingleNote from '../SingleNote/SingleNote';
import { connect } from 'react-redux';

const Notes = (props) => {
  console.log('rerendering text box');
  const notes = props.notesArray.map((note, i) => {
    console.log('Title array', props.titleArray[i]);
    return (
      <SingleNote
        key={i}
        title={props.titleArray[i]}
        note={note}
        id={i}
      />
    );
  });
  return (
    <div className="noteContainer">
      {notes}
    </div>

  );
};

const mapStateToProps = state => ({
  notesArray: state.updater.notesArray,
  titleArray: state.updater.titleArray,
});

export default connect(mapStateToProps)(Notes);
