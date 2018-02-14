import React from 'react';
import Field1 from './Field1';
import Field2 from './Field2';
import Field3 from './Field3';
import Field4 from './Field4';
import Field5 from './Field5';
import './Form.css';

export default class Form extends React.Component {
  render() {
    return (
      <form id="notesForm">
        <Field1 />
        <Field2 />
        <Field3 />
        <Field4 />
        <Field5 />
      </form>
    );
  }
}
