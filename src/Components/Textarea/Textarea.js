import React from 'react';
import './Textarea.css';
import Field from '../Field/Field';
import H2Text from '../H2Text/H2Text';
import SaveButton from '../SaveButton/SaveButton';
import { connect } from 'react-redux';
import actions from '../../redux/actions/';

class Field4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStyle: {
        color: '#000000',
      },
      value: this.props.currentNote,

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
          this.props.updateNote(event.target.value);
          if (event.target.value.length >= 149) {
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
          value={this.props.currentNote}
        />
        <Field>
          <SaveButton
            accessTitle={this.props.accessTitle}
            accessNote={this.props.accessNote}
            accessId={this.props.accessId}
            updateNote={this.props.updateNote}
            updateTitle={this.props.updateTitle}
            formReset={this.props.formReset}
          />
          <p> {150 - this.props.currentNote.length} </p>
        </Field>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   currentNote: state.updater.currentNote,
// });
// const mapDispatchtoProps = dispatch => ({
//   updateCurrentNote: (text) => {
//     dispatch(actions.updateCurrentNote(text));
//   },
// });
export default Field4;
