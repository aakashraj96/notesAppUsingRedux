import React from 'react';
import './Textarea.css';
import Field from '../Field/Field.jsx';
import H2Text from '../H2Text/H2Text.jsx';


export default class Field4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStyle: {
        color: '#000000',
      },
      value: ' some text',

    };
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    console.log('inside handle save');

    this.props.updateArray(this.state.value);
    this.setState({ value: '' });
  }
  render() {
    return (
      <div className="flexg">
        <textarea
          form="notesForm"
          name="note"
          style={this.state.formStyle}
          id="noteArea"
          onChange={(event) => {
          this.setState({ value: event.target.value });
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
          value={this.state.value}
        />
        <Field>
          <button type="button" value="Save " onClick={this.handleSave}>Save </button>
          <p> {150 - this.state.value.length} </p>
        </Field>
      </div>
    );
  }
}
