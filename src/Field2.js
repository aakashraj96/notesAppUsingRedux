import React from 'react';
import './Field2.css';

export default class Field2 extends React.Component {
  render() {
    return (
      <div className="field2">
        <input className="taskInput" type="text" name="tasks" placeholder="Tasks for today" />
      </div>
    );
  }
}
