import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Notes from './Components/Notes/Notes';
import CreateNote from './Components/CreateNote/CreateNote';
import { connect } from 'react-redux';


class MainWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTitle: '',
      currentNote: '',
      currentId: '',
      titles: [],
      notesTillNow: [],
      windowNumber: 0,

    };
    this.updateArray = this.updateArray.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.windowChange = this.windowChange.bind(this);
    // console.log('notestillnow', this.state.notesTillNow);
  }

  updateTitle(value) {
    this.setState({ currentTitle: value });
  }

  updateNote = (value) => {
    this.setState({ currentNote: value });
  }

  updateId = (value) => {
    this.setState({ currentId: value });
  }

  formReset = () => {
    this.setState({ currentTitle: '', currentNote: '', currentId: '' });
  }

  accessNote = () => this.state.currentNote

  accessTitle = () => this.state.currentTitle

  accessId = () => {
    if (this.state.currentId === '') {
      const tempId = Date.now();
      this.setState({ currentId: tempId });
      return tempId;
    }
    return this.state.currentId;
  }


  modifyNote = (id) => {
    const tempArray = this.state.titles;
    const tempNoteArray = this.state.notesTillNow;
    const tempNote = tempNoteArray[id];
    const tempTitle = tempArray[id];
    tempArray.splice(id, 1);
    tempNoteArray.splice(id, 1);
    this.setState({
      windowNumber: 0,
      currentNote: tempNote,
      currentTitle: tempTitle,
      titles: tempArray,
      notesTillNow: tempNoteArray,

    });
  }

  updateArray(value) {
    this.state.notesTillNow.push(value);
    this.state.titles.push(this.state.currentTitle);
    this.setState({
      windowNumber: 1,
      currentNote: '',
      currentTitle: '',
    });
    // console.log(this.state.titles);
    // console.log('Inside updateArray');
    // return this.state.notesTillNow;
  }

  windowChange() {
    this.setState({ windowNumber: 0 });
  }

  render() {
    // console.log('The TITLE ARRAY right now is', this.state.titles);

    if (this.props.pageNumber === 0) {
      return (

        <div className="mainWindow">
          <Header text="Start taking notes" />
          <Form
            updateNote={this.updateNote}
            updateTitle={this.updateTitle}
            currentNote={this.state.currentNote}
            currentTitle={this.state.currentTitle}
            accessNote={this.accessNote}
            accessTitle={this.accessTitle}
            accessId={this.accessId}
            formReset={this.formReset}
          />
          <Footer />
        </div>

      );
    } else if (this.props.pageNumber === 1) {
      console.log('PAGE NUMBER 1');
      return (

        <div className="mainWindow">
          <Header text="Saved Notes" />
          <Notes
            updateNote={this.updateNote}
            updateTitle={this.updateTitle}
            updateId={this.updateId}
          />
          <CreateNote />
        </div>


      );
    }
  }
}

const mapStateToProps = state => ({
  pageNumber: state.updater.pageNumber,
});

export default connect(mapStateToProps)(MainWindow);
// ========================================
