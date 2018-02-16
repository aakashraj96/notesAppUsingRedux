import React from 'react';
import Textarea from '../Textarea/Textarea.jsx';
import Field from '../Field/Field.jsx';
import H2Text from '../H2Text/H2Text.jsx';
import Inputbox from '../Inputbox/Inputbox.jsx';
import './Form.css';

export default class Form extends React.Component {
  constructor() {
    super();
  }


  render() {
    console.log('rerendering form');
    return (
      <form id="notesForm" >
        <Field>
          <H2Text text="Note Title" />
          <button type="button"> en </button>
        </Field>
        <Field>
          <Inputbox
            type="text"
            placeholder="Tasks for today"
            name="tasks"
            updateTitle={this.props.updateTitle}
          />
        </Field>
        <Field>
          <p><i>Please type your note below </i></p>
        </Field>

        <Textarea updateArray={this.props.updateArray} />

      </form>
    );
  }
}
