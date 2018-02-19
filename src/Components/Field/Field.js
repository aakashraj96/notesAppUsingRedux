import React from 'react';
import PropTypes from 'prop-types';
import './Field.css';


const Field = props => (
  <div className="field">
    {props.children}
  </div>
);

Field.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Field;
