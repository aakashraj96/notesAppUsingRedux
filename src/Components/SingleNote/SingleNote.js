import PropTypes from 'prop-types';
import React from 'react';
import './SingleNote.css';
import actions from '../../redux/actions/';
import { connect } from 'react-redux';


class Notes extends React.Component {
  handleClick = () => {
    console.log('THis note was clicked', this.props.id);
    console.log('The note ID is: ', this.props.id);
    this.props.addNote(this.props.id);
  }

  render() {
    return (
      <div className="singleNote" onClick={this.handleClick}>
         Title: {this.props.title} <br />
         Note: {this.props.note}
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  addNote: (id) => {
    dispatch(actions.addNote(id));
  },
});

export default connect(null, mapDispatchToProps)(Notes);
// Notes.propTypes = {
//   modifyNote: PropTypes.func.isRequired,
//   id: PropTypes.number.isRequired,
//   note: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };
