import React from 'react';
import Textarea from '../Textarea/Textarea.js';
import Field from '../Field/Field.js';
import H2Text from '../H2Text/H2Text.js';
import Inputbox from '../Inputbox/Inputbox.js'
import './Form.css';

export default class Form extends React.Component {
  render() {
    return (
      <form id="notesForm" >
        <Field>
          <H2Text text="Note Title" />
          <button type="button"> en </button>
        </Field>
        <Field>
          <Inputbox type="text" placeholder="Tasks for today" name="tasks" />
        </Field>
        <Field>
          <p><i>Please type your note below </i></p>
        </Field>

        <Textarea />

      </form>
    );
  }
}
