import React from 'react';
import { connect } from 'react-redux';
import './Inputbox.css';
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
          props.updateTitle(event.target.value);
        }}
      value={props.currentTitle}
    />
  );
};

export default Inputbox;
