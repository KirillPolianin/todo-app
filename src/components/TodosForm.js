import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodosForm extends Component {
  state = {
    text: '',
    dueDate: ''
  };

  onButtonClick = () => {
    this.props.addTodo(this.state);
    console.log(this.state.dueDate);
    this.setState({
      text: '',
      dueDate: ''
    });
  };

  render = () => (
    <div className="form-inline todo-form">
      <div className="form-group">
        <input
          className="form-control"
          placeholder="I have to ..."
          onChange={event => this.setState({ text: event.target.value })}
          value={this.state.text}
        />
        <input
          className="form-control"
          type="date"
          onChange={event => this.setState({ dueDate: event.target.value })}
          value={this.state.dueDate}
        />
      </div>
      <button
        type="button"
        className="btn btn-success"
        onClick={this.onButtonClick}
      >
        Add Todo
      </button>
    </div>
  );
}

export default connect(null, { addTodo })(TodosForm);
