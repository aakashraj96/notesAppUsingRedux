import React from 'react';
import './Inputbox.css';
import { connect } from 'react-redux';
import actions from '../../redux/actions/';

const Inputbox = (props) => {
  console.log('rerendering text box');
  return (
    <input
      className="inputStyle"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={(event) => {
        props.updateCurrentTitle(event.target.value);
      }}
      value={props.currentTitle}
    />
  );
};

const mapStateToProps = state => ({
  currentTitle: state.updater.currentTitle,
});
const mapDispatchtoProps = dispatch => ({
  updateCurrentTitle: (text) => {
    dispatch(actions.updateCurrentTitle(text));
  },
});
export default connect(mapStateToProps, mapDispatchtoProps)(Inputbox);
