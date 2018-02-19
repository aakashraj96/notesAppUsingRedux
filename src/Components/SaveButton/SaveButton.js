import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import './SaveButton.css';
import actions from '../../redux/actions/';


const SaveButton = props => (
  <button type="button" onClick={props.updateBoth}><h2 className="buttonText">Save</h2></button>
);


const mapDispatchToProps = dispatch => ({
  updateBoth: () => {
    dispatch(actions.updateTitleArray());
    dispatch(actions.updateNoteArray());
    dispatch(actions.changePage(1));
  },
});

export default connect(null, mapDispatchToProps)(SaveButton);
