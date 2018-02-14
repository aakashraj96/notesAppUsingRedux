import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

class MainWindow extends React.Component {
  render() {
    return (
      <div className="mainWindow">
        <Header />
        <Form />
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
