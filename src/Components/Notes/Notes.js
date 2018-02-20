import React from 'react';
import './Notes.css';
import SingleNote from '../SingleNote/SingleNote';
import { connect } from 'react-redux';

const Notes = (props) => {
  console.log('rerendering text box');


  const allNotes = Object.keys(props.notes).map(savedKey => (
    <SingleNote
      key={savedKey}
      title={props.notes[savedKey].title}
      note={props.notes[savedKey].note}
      id={savedKey}
      updateNote={props.updateNote}
      updateTitle={props.updateTitle}
      updateId={props.updateId}
    />
  ));

  return (
    <div className="noteContainer">
      {allNotes}
    </div>

  );
};

const mapStateToProps = state => ({
  notes: state.updater.notes,
});

export default connect(mapStateToProps)(Notes);
