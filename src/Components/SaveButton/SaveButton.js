import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import './SaveButton.css';
import actions from '../../redux/actions/';


const SaveButton = props => (
  <button
    type="button"
    onClick={() => {
      const obj = {
        title: props.accessTitle(),
        note: props.accessNote(),
        id: props.accessId(),
      };
      props.updateBoth(obj);
      props.formReset();
  }}
  ><h2 className="buttonText">Save</h2>
  </button>
);


const mapDispatchToProps = dispatch => ({
  updateBoth: (obj) => {
    dispatch(actions.updateNotes(obj));
    dispatch(actions.changePage(1));
  },
});

export default connect(null, mapDispatchToProps)(SaveButton);
