import React from 'react';
import PropTypes from 'prop-types';
import Textarea from '../Textarea/Textarea';
import Field from '../Field/Field';
import H2Text from '../H2Text/H2Text';
import Inputbox from '../Inputbox/Inputbox';
import './Form.css';


const Form = props =>
  // console.log('rerendering form');
  (
    <form id="notesForm" >
      <Field>
        <H2Text text="Note Title" />
        <button type="button"> en </button>
      </Field>
      <Field>
        <Inputbox
          type="text"
          name="tasks"
          updateTitle={props.updateTitle}
          currentTitle={props.currentTitle}
        />
      </Field>
      <Field>
        <p><i>Please type your note below </i></p>
      </Field>

      <Textarea
        updateNote={props.updateNote}
        currentNote={props.currentNote}
        accessNote={props.accessNote}
        accessTitle={props.accessTitle}
        formReset={props.formReset}
        accessId={props.accessId}
      />

    </form>
  );
Form.propTypes = {
  updateTitle: PropTypes.func.isRequired,
  updateArray: PropTypes.func.isRequired,
  currentNote: PropTypes.string.isRequired,
};

export default Form;
