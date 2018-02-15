import React from 'react';
import './Textarea.css';
import Field from '../Field/Field.js';
import H2Text from '../H2Text/H2Text.js';
import ReactDOM from 'react-dom';
import MainWindow from '../../index.js'

export default class Field4 extends React.Component {
  constructor() {
    super();
    this.state = {
      characterCount: 0,
      formStyle: {
        color: '#000000',
      },
      value: 'Some text inside'
    };
  }

  handleSave() {
    ReactDOM.render(
      <MainWindow />,
      document.getElementById('root'),
    );

  }
  render() {
    return (
      <div class="flexg">
      <textarea
        form="notesForm"
        name="note"
        style={this.state.formStyle}
        id="noteArea"
        onChange={(event) => {
          this.setState({value: event.target.value});
          if (this.state.value.length >= 149) {
            this.setState({
              formStyle: {
                color: '#FF0000',
              },
            });
          } else {
            this.setState({
              formStyle: {
                color: '#000000',
              },
            });
          }
        }}
        maxLength="150"
        value = {this.state.value}
      >

      </textarea>
      <Field>
      <button type="submit" value="Save " onClick = {this.handleSave}>Save </button>
      <p> {150 - this.state.value.length} </p>
      </Field>
      </div>
    );
  }
}
