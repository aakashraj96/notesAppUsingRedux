import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Form from './Components/Form/Form.js';

export default class MainWindow extends React.Component {
  render() {
    return (
      <div className="mainWindow">
        <Header text="Start taking notes" />
        <Form url="http://127.0.0.1:6000/saveNote" method="post"/>
        <Footer />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <MainWindow />,
  document.getElementById('root'),
);
