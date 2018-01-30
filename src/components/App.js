import React, { Component } from 'react';

import TodosForm from './TodosForm';
import TodosList from './TodosList';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">React & Redux Todo App</div>
        <TodosForm />
        <TodosList />
      </div>
    );
  }
}

export default App;
