import PropTypes from 'prop-types';
import React from 'react';
import './CreateNote.css';
import actions from '../../redux/actions/';
import { connect } from 'react-redux';

const CreateNote = props => (
  <button className="bottomButton" onClick={props.changePage}><h2 className="buttonText">Create New Note</h2></button>
);

const mapDispatchToProps = dispatch => ({
  changePage: () => {
    dispatch(actions.changePage(0));
  },
});

export default connect(null, mapDispatchToProps)(CreateNote);
