import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Form from './Components/Form/Form.jsx';
import Notes from './Components/Notes/Notes.jsx';
import CreateNote from './Components/CreateNote/CreateNote.jsx';

export default class MainWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTitle: '',
      titles: [],
      notesTillNow: [],
      windowNumber: 0,

    };
    this.updateArray = this.updateArray.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.windowChange = this.windowChange.bind(this);
    console.log('notestillnow', this.state.notesTillNow);
  }

  updateTitle(value) {
    this.setState({ currentTitle: value });
    // console.log(this.state.currentTitle);
  }


  updateArray(value) {
    this.state.notesTillNow.push(value);
    this.state.titles.push(this.state.currentTitle);
    this.setState({ windowNumber: 1 });
    console.log(this.state.titles);
    console.log('Inside updateArray');
    // return this.state.notesTillNow;
  }

  windowChange() {
    this.setState({ windowNumber: 0 });
  }

  render() {
    if (this.state.windowNumber === 0) {
      return (
        <div className="mainWindow">
          <Header text="Start taking notes" />
          <Form updateArray={this.updateArray} updateTitle={this.updateTitle} />
          <Footer />
        </div>
      );
    }

    return (
      <div className="mainWindow">
        <Header text="Saved Notes" />
        <Notes notesArray={this.state.notesTillNow} titleArray={this.state.titles} />
        <CreateNote windowChange={this.windowChange} />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <MainWindow />,
  document.getElementById('root'),
);
